import styles from "./styles";
import * as React from "react";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { BottomTab } from "@components";
import { Text, View, Image, TouchableOpacity } from "react-native";

const Language = ({ navigation }) => {
  return (
    <MainLayout>
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
            PILIH BAHASA
          </Text>
        </View>
        <View style={styles.card}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 20,
                marginLeft: 20,
                marginTop: 15,
                fontWeight: "bold",
              }}
            >
              INDONESIA
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
              source={require("@images/indonesian-flag.png")}
            />
          </View>
        </View>
        <BottomTab navigation={navigation} />
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
