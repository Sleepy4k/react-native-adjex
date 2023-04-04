import styles from "./styles";
import * as React from "react";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { notification } from "@helpers";
import { BottomTab } from "@components";
import { Text, View, Image, TouchableOpacity } from "react-native";

const Language = ({ navigation }) => {
  return (
    <MainLayout navigation={navigation}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("@images/logo.jpg")} />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image
              style={{
                width: 20,
                height: 20,
                marginLeft: -20,
                marginBottom: 10,
              }}
              source={require("@images/back-white-icon.png")}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 17,
              marginLeft: 20,
              color: "white",
              fontWeight: "bold",
            }}
          >
            {"CHOOSE LANGUAGE"}
          </Text>
        </View>
        <View style={styles.card}>
          <TouchableOpacity
            onPress={() =>
              notification("Language changed succefully", "success")
            }
          >
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 20,
                  marginLeft: 20,
                  marginTop: 15,
                  fontWeight: "bold",
                }}
              >
                {"ENGLISH"}
              </Text>
              <Image
                style={{
                  width: 35,
                  height: 35,
                  marginLeft: 110,
                  marginTop: 10,
                  borderRadius: 50,
                  borderWidht: 1,
                }}
                source={require("@images/american-flag.png")}
              />
            </View>
          </TouchableOpacity>
        </View>
        <BottomTab navigation={navigation} style={styles.tombol} />
      </View>
    </MainLayout>
  );
};

Language.propTypes = {
  navigation: PropTypes.object.isRequired,
};

Language.defaultProps = {
  navigation: {
    navigate: () => {},
  },
};

export default Language;

// Path: src\screens\Language\index.js
