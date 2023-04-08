import styles from "./styles";
import * as React from "react";
import { api } from "@services";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { notification } from "@helpers";
import { useTranslation } from "react-i18next";
import { Text, View, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ShowQuiz = ({ route, navigation }) => {
  const { t } = useTranslation();
  const { index } = route.params.param;
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [disabled, setDisabled] = React.useState(false);

  React.useEffect(() => {
    const initData = async () => {
      try {
        const response = await api.get(`/quiz/${index}`);

        if (response.data.status == "success") {
          setData(response.data.data);
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
  }, [index]);

  const handleSubmit = async (answer) => {
    if (!answer) {
      return;
    }

    setLoading(true);
    setDisabled(true);

    if (answer == data.answer) {
      const quizData = await AsyncStorage.getItem("quizData");

      if (!quizData) {
        await AsyncStorage.setItem(
          "quizData",
          JSON.stringify({
            current: 1,
            total: 1,
          })
        );

        notification(
          t("show_quiz.correct_answer"),
          t("axios.title", { context: "success" })
        );
        setLoading(false);
        setDisabled(false);
        navigation.navigate("ShowQuiz", { param: { index: index + 1 } });

        return;
      }

      const { current, total } = JSON.parse(quizData);

      if (total < 4) {
        await AsyncStorage.setItem(
          "quizData",
          JSON.stringify({
            current: current + 1,
            total: total + 1,
          })
        );

        notification(
          t("show_quiz.correct_answer"),
          t("axios.title", { context: "success" })
        );
        setLoading(false);
        setDisabled(false);
        navigation.navigate("ShowQuiz", { param: { index: index + 1 } });
      } else {
        await AsyncStorage.setItem(
          "quizData",
          JSON.stringify({
            current: 0,
            total: 0,
          })
        );

        notification(
          t("show_quiz.completed"),
          t("axios.title", { context: "success" })
        );

        const certificate = await AsyncStorage.getItem("certificate");

        if (!certificate) {
          await AsyncStorage.setItem(
            "certificate",
            JSON.stringify({
              total: 1,
            })
          );

          setLoading(false);
          setDisabled(false);
          navigation.navigate("Congrats");

          return;
        }

        const certificate_data = JSON.parse(certificate);

        await AsyncStorage.setItem(
          "certificate",
          JSON.stringify({
            total: certificate_data.total + 1,
          })
        );

        setLoading(false);
        setDisabled(false);
        navigation.navigate("Congrats");
      }
    } else {
      notification(
        t("show_quiz.wrong_answer"),
        t("axios.title", { context: "error" })
      );
      setLoading(false);
      setDisabled(false);
      navigation.navigate("Alert", { param: { index: index } });
    }
  };

  return (
    <MainLayout navigation={navigation} loading={loading}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("@images/logo.png")} />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => navigation.replace("Quiz")}>
            <Image
              style={{
                width: 25,
                height: 25,
                marginLeft: -10,
                marginTop: 10,
              }}
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
            {`${t("show_quiz.title")} `}
            {index ? index : 1}
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
                marginLeft: 20,
              }}
            >
              {data?.question}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => handleSubmit("a")}
            disabled={disabled}
          >
            <View style={styles.card1}>
              <Text
                style={{
                  fontSize: 16,
                  marginTop: 22,
                  marginLeft: 25,
                  fontWeight: "bold",
                }}
              >
                {data?.a}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleSubmit("b")}
            disabled={disabled}
          >
            <View style={styles.card1}>
              <Text
                style={{
                  fontSize: 16,
                  marginTop: 22,
                  marginLeft: 25,
                  fontWeight: "bold",
                }}
              >
                {data?.b}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleSubmit("c")}
            disabled={disabled}
          >
            <View style={styles.card1}>
              <Text
                style={{
                  fontSize: 16,
                  marginTop: 22,
                  marginLeft: 25,
                  fontWeight: "bold",
                }}
              >
                {data?.c}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleSubmit("d")}
            disabled={disabled}
          >
            <View style={styles.card1}>
              <Text
                style={{
                  fontSize: 16,
                  marginTop: 22,
                  marginLeft: 25,
                  fontWeight: "bold",
                }}
              >
                {data?.d}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
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
