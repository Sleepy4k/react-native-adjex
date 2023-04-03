import styles from "./styles";
import * as React from "react";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";

const Quiz = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("@images/logo.jpg")} />
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
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
          Quiz
        </Text>
      </View>
      <View style={styles.card}>
        <ScrollView style={styles.container}>
          <View style={styles.card1}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ShowQuiz", { param: { index: 1 } })
              }
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{
                    width: 35,
                    height: 35,
                    marginLeft: 12,
                    marginTop: 16,
                  }}
                  source={require("@images/quiz-icon.png")}
                />
                <Text
                  style={{
                    fontSize: 17,
                    marginTop: 20,
                    marginLeft: 20,
                    fontWeight: "bold",
                  }}
                >
                  Quiz
                </Text>
                <Text
                  style={{
                    fontSize: 17,
                    marginTop: 20,
                    marginLeft: 5,
                    fontWeight: "bold",
                  }}
                >
                  1
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.card1}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ShowQuiz", { param: { index: 2 } })
              }
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{
                    width: 35,
                    height: 35,
                    marginLeft: 12,
                    marginTop: 16,
                  }}
                  source={require("@images/quiz-icon.png")}
                />
                <Text
                  style={{
                    fontSize: 17,
                    marginTop: 20,
                    marginLeft: 20,
                    fontWeight: "bold",
                  }}
                >
                  Quiz
                </Text>
                <Text
                  style={{
                    fontSize: 17,
                    marginTop: 20,
                    marginLeft: 5,
                    fontWeight: "bold",
                  }}
                >
                  2
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.card1}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ShowQuiz", { param: { index: 3 } })
              }
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{
                    width: 35,
                    height: 35,
                    marginLeft: 12,
                    marginTop: 16,
                  }}
                  source={require("@images/quiz-icon.png")}
                />
                <Text
                  style={{
                    fontSize: 17,
                    marginTop: 20,
                    marginLeft: 20,
                    fontWeight: "bold",
                  }}
                >
                  Quiz
                </Text>
                <Text
                  style={{
                    fontSize: 17,
                    marginTop: 20,
                    marginLeft: 5,
                    fontWeight: "bold",
                  }}
                >
                  3
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.card1}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ShowQuiz", { param: { index: 4 } })
              }
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{
                    width: 35,
                    height: 35,
                    marginLeft: 12,
                    marginTop: 16,
                  }}
                  source={require("@images/quiz-icon.png")}
                />
                <Text
                  style={{
                    fontSize: 17,
                    marginTop: 20,
                    marginLeft: 20,
                    fontWeight: "bold",
                  }}
                >
                  Quiz
                </Text>
                <Text
                  style={{
                    fontSize: 17,
                    marginTop: 20,
                    marginLeft: 5,
                    fontWeight: "bold",
                  }}
                >
                  4
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.card1}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ShowQuiz", { param: { index: 5 } })
              }
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{
                    width: 35,
                    height: 35,
                    marginLeft: 12,
                    marginTop: 16,
                  }}
                  source={require("@images/quiz-icon.png")}
                />
                <Text
                  style={{
                    fontSize: 17,
                    marginTop: 20,
                    marginLeft: 20,
                    fontWeight: "bold",
                  }}
                >
                  Quiz
                </Text>
                <Text
                  style={{
                    fontSize: 17,
                    marginTop: 20,
                    marginLeft: 5,
                    fontWeight: "bold",
                  }}
                >
                  5
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

Quiz.propTypes = {
  navigation: PropTypes.object.isRequired,
};

Quiz.defaultProps = {
  navigation: {
    navigate: () => {},
  },
};

export default Quiz;

// Path: src\screens\Quiz\index.js
