import styles from "./styles";
import * as React from "react";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { notification } from "@helpers";
import { BottomTab } from "@components";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View, Alert, Image, TouchableOpacity } from "react-native";

const Profile = ({ navigation }) => {
  const { t } = useTranslation();
  const [admin, setAdmin] = React.useState(false);
  const [name, setName] = React.useState(t("profile.guest"));
  const [loading, setLoading] = React.useState(true);
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
      } finally {
        setLoading(false);
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
            setLoading(true);
            await AsyncStorage.removeItem("authUser");
            await AsyncStorage.removeItem("quizData");
            await AsyncStorage.removeItem("language");
            await AsyncStorage.removeItem("guestSearch");

            notification("You have been logged out", "success");
            setLoading(false);
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
            setLoading(true);
            await AsyncStorage.removeItem("quizData");
            await AsyncStorage.removeItem("language");
            await AsyncStorage.removeItem("certificate");
            await AsyncStorage.removeItem("guestSearch");

            notification("Local Storage Cleared", "Dev Mode");
            setLoading(false);
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

  return (
    <MainLayout navigation={navigation} loading={loading}>
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
              {name} {admin ? `(${t("profile.admin")})` : ""}
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
            {t("profile.account")}
          </Text>
          <View style={styles.card3}>
            <TouchableOpacity onPress={() => navigation.navigate("Language")}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 10 }}>
                  {t("profile.language")}
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
                    {t("profile.logout")}
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
                    {t("profile.login")}
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
            {t("profile.system")}
          </Text>
          {authUser && (
            <TouchableOpacity onPress={() => navigation.navigate("Report")}>
              <View style={styles.card3}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 10 }}>
                    {t("profile.report_bug")}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => navigation.navigate("About")}>
            <View style={styles.card3}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 10 }}>
                  {t("profile.about_us")}
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
                {t("profile.admin")}
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
                      {t("profile.adjective")}
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
                      {t("profile.delete_local_storage")}
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
