import styles from "./styles";
import * as React from "react";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { BottomTab } from "@components";
import { Text, View, Image, TouchableOpacity } from "react-native";

const Congrats = ({ navigation }) => {
  return (
    <MainLayout navigation={navigation}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("@images/logo.png")} />
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 25,
              marginTop: 10,
              marginLeft: 55,
              fontWeight: "bold",
              color: "white",
            }}
          >
            {"CONGRATS"}
          </Text>
        </View>
        <View style={styles.card}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 15,
                marginTop: 25,
                color: "black",
                marginLeft: 75,
              }}
            >
              {"This is your Certificate"}
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Certificate")}>
            <Image
              style={{
                width: 200,
                height: 130,
                marginTop: 80,
                marginLeft: 55,
                borderWidht: 1,
              }}
              source={require("@images/certificate.png")}
            />
          </TouchableOpacity>
        </View>
        <BottomTab navigation={navigation} />
      </View>
    </MainLayout>
  );
};

Congrats.propTypes = {
  navigation: PropTypes.object.isRequired,
};

Congrats.defaultProps = {
  navigation: {
    navigate: () => {},
  },
};

export default Congrats;

// Path: src\screens\Congrats\index.js
