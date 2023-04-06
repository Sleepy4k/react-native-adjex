import config from "@config";
import styles from "./styles";
import * as React from "react";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { BottomTab } from "@components";
import { notification } from "@helpers";
import { Text, View, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({ navigation }) => {
  const [name, setName] = React.useState("Guest");
  const [authUser, setAuthUser] = React.useState(false);

  React.useEffect(() => {
    const initUser = async () => {
      try {
        const authUser = await AsyncStorage.getItem("authUser");

        if (authUser) {
          const user = JSON.parse(authUser);

          if (user.data.firstName || user.data.lastName) {
            setName(`${user.data.firstName} ${user.data.lastName}`);
            setAuthUser(true);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    initUser();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("authUser");
      await AsyncStorage.removeItem("quizData");
      await AsyncStorage.removeItem("guestSearch");

      navigation.navigate("Dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <MainLayout navigation={navigation}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("@images/logo.png")} />
        <View style={styles.card}>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ width: 70, height: 70, marginLeft: 10, marginTop: 10 }}
              source={require("@images/profile-border-icon.png")}
            />
            <Text
              style={{
                fontSize: 20,
                marginLeft: 10,
                marginTop: 30,
                fontWeight: "bold",
              }}
            >
              {name}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 20,
              marginLeft: 20,
              marginTop: 30,
              fontWeight: "bold",
            }}
          >
            {"Account"}
          </Text>
          <View style={styles.card1}>
            <TouchableOpacity onPress={() => navigation.navigate("Language")}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 10 }}>
                  {"Language"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          {authUser ? (
            <TouchableOpacity onPress={handleLogout}>
              <View style={styles.card2}>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: 17,
                      marginTop: 10,
                      marginLeft: 10,
                      color: "white",
                    }}
                  >
                    {"Log Out"}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <View style={styles.card1}>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: 17,
                      marginTop: 10,
                      marginLeft: 10,
                    }}
                  >
                    {"Log In"}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          <Text
            style={{
              fontSize: 20,
              marginLeft: 20,
              marginTop: 40,
              fontWeight: "bold",
            }}
          >
            {"System"}
          </Text>
          {authUser && (
            <TouchableOpacity onPress={() => navigation.navigate("Report")}>
              <View style={styles.card1}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 10 }}>
                    {"Report Bug"}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => navigation.navigate("About")}>
            <View style={styles.card1}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 10 }}>
                  {"About Us"}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          {config.expo.extra.env == "dev" && (
            <TouchableOpacity
              onPress={async () => {
                await AsyncStorage.removeItem("quizData");
                await AsyncStorage.removeItem("certificate");
                await AsyncStorage.removeItem("guestSearch");
                notification("Local Storage Cleared", "Dev Mode");
              }}
            >
              <View style={styles.card1}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 10 }}>
                    {"Delete Local Storage"}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        </View>
        <BottomTab navigation={navigation} />
      </View>
    </MainLayout>
  );
};

Profile.propTypes = {
  navigation: PropTypes.object.isRequired,
};

Profile.defaultProps = {
  navigation: {
    navigate: () => {},
  },
};

export default Profile;

// Path: src\screens\Profile\index.js
