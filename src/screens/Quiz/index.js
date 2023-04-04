import styles from "./styles";
import * as React from "react";
import PropTypes from "prop-types";
import { notification } from "@helpers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";

const Quiz = ({ navigation }) => {
  const [quizData, setQuizData] = React.useState({
    current: 0,
    total: 0,
  });

  React.useEffect(() => {
    const initData = async () => {
      try {
        const quizIndex = await AsyncStorage.getItem("quizData");

        if (quizIndex) {
          const quiz = JSON.parse(quizIndex);

          setQuizData(quiz);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    initData();
  }, []);

  const handleButton = (index) => {
    if (quizData.current == index) {
      navigation.navigate("ShowQuiz", { param: { index: index + 1 } });
    } else if (quizData.current > index) {
      notification("You have already completed this quiz", "error");
    } else {
      notification("Please complete previous quiz", "error");
    }
  };

  const renderQuiz = () => {
    let quiz = [];

    for (let index = 0; index < 5; index++) {
      quiz.push(
        <View key={index} style={index + 1 == 5 ? styles.card2 : styles.card1}>
          <TouchableOpacity onPress={() => handleButton(index)}>
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
                {"Quiz"}
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  marginTop: 20,
                  marginLeft: 5,
                  fontWeight: "bold",
                }}
              >
                {index + 1}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }

    return quiz;
  };

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
          {"Quiz"}
        </Text>
      </View>
      <View style={styles.card}>
        <ScrollView style={styles.container}>{renderQuiz()}</ScrollView>
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
