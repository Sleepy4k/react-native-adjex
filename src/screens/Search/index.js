import styles from "./styles";
import * as React from "react";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { BottomTab } from "@components";
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
  const [error, setError] = React.useState("");
  const [search, setSearch] = React.useState("");

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

      if (guestSearch && !authUser) {
        const guest = JSON.parse(guestSearch);
        console.log(guest);

        if (guest.total > 5) {
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
                onPress: () => console.log("Search cancel"),
              },
            ]
          );
        } else {
          await AsyncStorage.setItem(
            "guestSearch",
            JSON.stringify({
              total: guest.total + 1,
            })
          );

          navigation.replace("DetailWord", { param: { word: search } });
        }
      } else if (!guestSearch && !authUser) {
        await AsyncStorage.setItem(
          "guestSearch",
          JSON.stringify({
            total: 1,
          })
        );

        navigation.replace("DetailWord", { param: { word: search } });
      } else {
        navigation.replace("DetailWord", { param: { word: search } });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <MainLayout navigation={navigation}>
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
            placeholder="Search Your History"
            value={search}
            onChangeText={(text) => setSearch(text)}
          ></TextInput>
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
            {"Search History"}
          </Text>
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
