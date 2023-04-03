import styles from "./styles";
import * as React from "react";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { BottomTab } from "@components";
import { Text, View, Image, TouchableOpacity } from "react-native";

const ShowQuiz = ({ route, navigation }) => {
  const { index } = route.params.param;

  return (
    <MainLayout>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("@images/logo.jpg")} />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Quiz")}>
            <Image
              style={{ width: 25, height: 25, marginLeft: -10, marginTop: 10 }}
              source={require("@images/back-white-icon.png")}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 17,
              marginTop: 10,
              marginLeft: 50,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Quiz {index ? index : 1}
          </Text>
        </View>
        <View style={styles.card}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 15,
                marginTop: 15,
                fontWeight: "bold",
                color: "black",
                marginLeft: 45,
              }}
            >
              The topic of the passage is…
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginTop: 15,
                fontWeight: "bold",
                color: "black",
              }}
            >
              ?
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Alert")}>
            <View style={styles.card1}>
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 25,
                  marginLeft: 55,
                  fontWeight: "bold",
                }}
              >
                The static atmosphere
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Alert")}>
            <View style={styles.card1}>
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 25,
                  marginLeft: 28,
                  fontWeight: "bold",
                }}
              >
                The change in the atmosphere
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ShowQuiz", { param: { index: index + 1 } })
            }
          >
            <View style={styles.card1}>
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 25,
                  marginLeft: 25,
                  fontWeight: "bold",
                }}
              >
                The earth’s original atmosphere
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <BottomTab navigation={navigation} />
      </View>
    </MainLayout>
  );
};

ShowQuiz.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

ShowQuiz.defaultProps = {
  route: {
    params: {
      param: {
        index: 1,
      },
    },
  },
  navigation: {
    navigate: () => {},
  },
};

export default ShowQuiz;

// Path: src\screens\ShowQuiz\index.js
