import styles from "./styles";
import * as React from "react";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { notification } from "@helpers";
import { BottomTab } from "@components";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Text,
  View,
  Alert,
  Image,
  Keyboard,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Search = ({ navigation }) => {
  const { t } = useTranslation();

  const [error, setError] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [history, setHistory] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const initHistory = async () => {
      try {
        const guestSearch = await AsyncStorage.getItem("guestSearch");

        if (guestSearch) {
          const guest = JSON.parse(guestSearch);

          if (guest.total > 0) {
            setHistory(guest.word);
          }
        }
      } catch (error) {
        notification("Something went wrong", "error");
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    initHistory();
  }, []);

  const validate = async () => {
    Keyboard.dismiss();

    let isValid = true;

    if (!search) {
      setError("Please input search");
      isValid = false;
    } else if (search.length > 255) {
      setError("Search cannot exceed 255 characters");
      isValid = false;
    }

    if (isValid) {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    try {
      const authUser = await AsyncStorage.getItem("authUser");
      const guestSearch = await AsyncStorage.getItem("guestSearch");

      if (guestSearch) {
        const guest = JSON.parse(guestSearch);

        if (guest.total > 4 && !authUser) {
          Alert.alert(
            "Please login",
            "You have exceeded the maximum search limit",
            [
              {
                text: "Login",
                onPress: () => navigation.navigate("Login"),
              },
              {
                text: "Cancel",
                style: "cancel",
              },
            ]
          );
        } else {
          const words = [search, ...guest.word.slice(0, 4)];

          await AsyncStorage.setItem(
            "guestSearch",
            JSON.stringify({
              total: guest.total + 1,
              word: words,
            })
          );

          navigation.replace("SearchResult", { param: { word: search } });
        }
      } else if (!guestSearch) {
        await AsyncStorage.setItem(
          "guestSearch",
          JSON.stringify({
            total: 1,
            word: [search],
          })
        );

        navigation.replace("SearchResult", { param: { word: search } });
      } else {
        navigation.replace("SearchResult", { param: { word: search } });
      }
    } catch (error) {
      notification("Something went wrong", "error");
      console.log(error.message);
    }
  };

  return (
    <MainLayout navigation={navigation} loading={loading}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("@images/logo.png")} />
        <View style={{ flexDirection: "row" }}>
          <TextInput
            style={{
              borderRadius: 10,
              borderWidth: 1,
              height: 40,
              width: 280,
              marginLeft: -20,
              padding: 10,
              backgroundColor: "white",
            }}
            placeholder={t("search.placeholder")}
            value={search}
            onChangeText={(text) => setSearch(text)}
          />
          <TouchableOpacity
            onPress={validate}
            style={{
              height: 40,
              width: 40,
              backgroundColor: "white",
              borderRadius: 10,
              marginLeft: 10,
            }}
          >
            <Image
              style={{ width: 35, height: 35, marginTop: 2, marginLeft: 2 }}
              source={require("@images/search-icon.png")}
            />
          </TouchableOpacity>
        </View>
        {error ? (
          <Text style={{ color: "red", marginLeft: 20, marginTop: 10 }}>
            {error}
          </Text>
        ) : null}
        <View style={styles.card}>
          <Text
            style={{
              fontSize: 15,
              marginLeft: 20,
              marginTop: 30,
              fontWeight: "bold",
            }}
          >
            {t("search.history")}
          </Text>
          {history && history.length > 0
            ? history.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    navigation.replace("SearchResult", {
                      param: { word: item },
                    })
                  }
                >
                  <View
                    style={{
                      marginTop: 10,
                      backgroundColor: "#1C3144",
                      height: 55,
                      width: 270,
                      borderRadius: 10,
                      alignSelf: "center",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          fontSize: 17,
                          marginTop: 15,
                          marginLeft: 20,
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        {item}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))
            : null}
        </View>
        <BottomTab navigation={navigation} />
      </View>
    </MainLayout>
  );
};

Search.propTypes = {
  navigation: PropTypes.object.isRequired,
};

Search.defaultProps = {
  navigation: {
    navigate: () => {},
  },
};

export default Search;

// Path: src\screens\Search\index.js
