import styles from "./styles";
import * as React from "react";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { BottomTab } from "@components";
import { Text, View, Image, TouchableOpacity } from "react-native";

const Profile = ({ navigation }) => {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("@images/logo.jpg")} />
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
              Benjamin4K
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
            Akun
          </Text>
          <View style={styles.card1}>
            <TouchableOpacity onPress={() => navigation.navigate("Language")}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 10 }}>
                  Pilih
                </Text>
                <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 5 }}>
                  Bahasa
                </Text>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    marginLeft: 140,
                    marginTop: 12,
                  }}
                  source={require("@images/next-icon.png")}
                />
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
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
                  Log
                </Text>
                <Text
                  style={{
                    fontSize: 17,
                    marginTop: 10,
                    marginLeft: 5,
                    color: "white",
                  }}
                >
                  Out
                </Text>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    marginLeft: 170,
                    marginTop: 12,
                  }}
                  source={require("@images/next-icon.png")}
                />
              </View>
            </View>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              marginLeft: 20,
              marginTop: 40,
              fontWeight: "bold",
            }}
          >
            System
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Report")}>
            <View style={styles.card1}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 10 }}>
                  Laporan
                </Text>
                <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 5 }}>
                  Bug
                </Text>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    marginLeft: 137,
                    marginTop: 12,
                  }}
                  source={require("@images/next-icon.png")}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("About")}>
            <View style={styles.card1}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 10 }}>
                  Tentang
                </Text>
                <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 5 }}>
                  Kami
                </Text>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    marginLeft: 130,
                    marginTop: 12,
                  }}
                  source={require("@images/next-icon.png")}
                />
              </View>
            </View>
          </TouchableOpacity>
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
