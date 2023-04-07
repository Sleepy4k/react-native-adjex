import styles from "./styles";
import * as React from "react";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { BottomTab } from "@components";
import { notification } from "@helpers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View, Alert, Image, TouchableOpacity } from "react-native";

const Profile = ({ navigation }) => {
  const [admin, setAdmin] = React.useState(true);
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

          if (user.data.role === "admin") {
            notification("You are now an admin", "success");
            setAdmin(true);
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
      Alert.alert("Are you sure?", "You will be logged out", [
        {
          text: "Log Out",
          onPress: async () => {
            await AsyncStorage.removeItem("authUser");
            await AsyncStorage.removeItem("quizData");
            await AsyncStorage.removeItem("guestSearch");

            notification("You have been logged out", "success");
            navigation.navigate("Dashboard");
          },
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ]);
    } catch (error) {
      notification("Something went wrong", "error");
      console.log(error.message);
    }
  };

  const handleClearStorage = async () => {
    try {
      Alert.alert("Are you sure?", "Local data will deleted permanent", [
        {
          text: "Delete",
          onPress: async () => {
            await AsyncStorage.removeItem("quizData");
            await AsyncStorage.removeItem("certificate");
            await AsyncStorage.removeItem("guestSearch");

            notification("Local Storage Cleared", "Dev Mode");
            navigation.replace("Profile");
          },
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ]);
    } catch (error) {
      notification(error.message, "error");
      console.log(error.message);
    }
  };

  const handleConfirmations = (func) => {
    try {
      Alert.alert(
        "Please login",
        "You have exceeded the maximum search limit",
        [
          {
            text: "Login",
            onPress: func,
          },
          {
            text: "Cancel",
            style: "cancel",
          },
        ]
      );
    } catch (error) {
      notification("Something went wrong", "error");
      console.log(error.message);
    }
  };

  return (
    <MainLayout navigation={navigation}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("@images/logo.png")} />
        <View style={admin ? styles.card : styles.card2}>
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
              {name} {admin ? "(Admin)" : ""}
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
          <View style={styles.card3}>
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
              <View style={styles.card4}>
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
              <View style={styles.card3}>
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
              <View style={styles.card3}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 10 }}>
                    {"Report Bug"}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => navigation.navigate("About")}>
            <View style={styles.card3}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 10 }}>
                  {"About Us"}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          {authUser && admin && (
            <>
              <Text
                style={{
                  fontSize: 20,
                  marginLeft: 20,
                  marginTop: 40,
                  fontWeight: "bold",
                }}
              >
                {"Admin"}
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("Adjective")}
              >
                <View
                  style={{
                    marginTop: 10,
                    backgroundColor: "#FAC952",
                    height: 45,
                    width: 270,
                    borderRadius: 10,
                    alignSelf: "center",
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{ fontSize: 17, marginTop: 10, marginLeft: 10 }}
                    >
                      {"Adjective"}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleClearStorage}>
                <View style={styles.card3}>
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{ fontSize: 17, marginTop: 10, marginLeft: 10 }}
                    >
                      {"Delete Local Storage"}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </>
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
