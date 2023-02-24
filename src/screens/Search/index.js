// Import Core Libraries
import { useState } from "react";
import PropTypes from "prop-types";
import { View, Image, Text, Alert, Keyboard } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Import Styles
import styles from "./styles";

// Import Layouts
import { AuthLayout } from "../../layouts";

// Import Helpers
import { Notifcation } from "../../helpers";

// Import Components
import { InputField } from "../../components";

const Search = ({ navigation }) => {
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

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
      submit();
    }
  };

  const submit = async () => {
    const authUser = await AsyncStorage.getItem("authUser");
    const guestSearch = await AsyncStorage.getItem("guestSearch");

    if (guestSearch && !authUser) {
      const search = JSON.parse(guestSearch);

      if (search.total > 5) {
        Alert.alert(
          "Please login",
          "You have exceeded the maximum search limit",
          [
            {
              text: "Login",
              onPress: () => navigation.navigate("Stack", { screen: "Login" }),
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
            total: search.total + 1,
          })
        );

        handleApi();
      }
    } else if (!guestSearch && !authUser) {
      await AsyncStorage.getItem("guestSearch").then(() => {
        AsyncStorage.setItem(
          "guestSearch",
          JSON.stringify({
            total: 1,
          })
        );
      });

      handleApi();
    } else {
      handleApi();
    }
  };

  const handleApi = () => {
    Notifcation("Data berhasil di cari", "success");
  };

  return (
    <AuthLayout navigation={navigation}>
      <View style={styles.searchScreen}>
        <View style={styles.bannerLayout}>
          <Image
            style={styles.bannerLayout}
            resizeMode="cover"
            source={require("../../../assets/banner-2.png")}
          />
        </View>
        <View style={[styles.search, styles.searchPosition]}>
          <InputField
            error={error}
            editable={!loading}
            icon={"search-web"}
            customIcon={"send"}
            defaultValue={search}
            placeholder={"Search"}
            customFunction={validate}
            inputFunction={(input) => setSearch(input)}
          />
        </View>
        <View style={[styles.adjective, styles.searchPosition]}>
          <View style={[styles.background, styles.searchPosition]} />
          <Text
            style={[
              styles.topAdjectiveSearch,
              styles.searchFlexBox,
              styles.lonelyTypo,
            ]}
          >
            {"Search History"}
          </Text>
        </View>
      </View>
    </AuthLayout>
  );
};

Search.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Search;
