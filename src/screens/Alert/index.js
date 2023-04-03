import styles from "./styles";
import * as React from "react";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { BottomTab } from "@components";
import { Text, View, Image, TouchableOpacity } from "react-native";

const Alert = ({ navigation }) => {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("@images/logo.jpg")} />
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 25,
              marginTop: 10,
              marginLeft: 90,
              fontWeight: "bold",
              color: "red",
            }}
          >
            ALERT
          </Text>
        </View>
        <View style={styles.card}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 15,
                marginTop: 25,
                fontWeight: "bold",
                color: "black",
                marginLeft: 35,
              }}
            >
              your answer is wrong, try again?
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Quiz")}>
            <View style={styles.card1}>
              <Text
                style={{
                  fontSize: 20,
                  marginTop: 20,
                  marginLeft: 120,
                  fontWeight: "bold",
                }}
              >
                Yes
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
            <View style={styles.card1}>
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 25,
                  marginLeft: 70,
                  fontWeight: "bold",
                }}
              >
                Back to Dashboard
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <BottomTab navigation={navigation} />
      </View>
    </MainLayout>
  );
};

Alert.propTypes = {
  navigation: PropTypes.object.isRequired,
};

Alert.defaultProps = {
  navigation: {
    navigate: () => {},
  },
};

export default Alert;

// Path: src\screens\Alert\index.js
