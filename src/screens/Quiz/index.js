import styles from "./styles";
import * as React from "react";
import { api } from "@services";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { notification } from "@helpers";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";

const Quiz = ({ navigation }) => {
  const { t } = useTranslation();
  const [category, setCategory] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
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

    const initQuiz = async () => {
      try {
        const response = await api.get("/category");

        if (response.data.status == "success") {
          setCategory(response.data.data);
        } else {
          console.log(response.message);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    initData();
    initQuiz();
  }, []);

  const handleButton = (index) => {
    if (quizData.current == index - 1) {
      navigation.navigate("ShowQuiz", { param: { category: index } });
    } else if (quizData.current > index - 1) {
      notification("You have already completed this quiz", "error");
    } else {
      notification("Please complete previous quiz", "error");
    }
  };

  return (
    <MainLayout navigation={navigation} loading={loading} scroll={false}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("@images/logo.png")} />
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
            {t("quiz.title")}
          </Text>
        </View>
        <View style={styles.card}>
          <ScrollView style={styles.container}>
            {category &&
              category.length > 0 &&
              category.map((item, index) => (
                <View
                  key={index}
                  style={index + 1 == 5 ? styles.card2 : styles.card1}
                >
                  <TouchableOpacity onPress={() => handleButton(item.id)}>
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
                        {item.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
          </ScrollView>
        </View>
      </View>
    </MainLayout>
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
