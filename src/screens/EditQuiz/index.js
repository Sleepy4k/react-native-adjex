import styles from "./styles";
import * as React from "react";
import { api } from "@services";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { BottomTab } from "@components";
import { notification } from "@helpers";
import { useTranslation } from "react-i18next";
import { AuthContext } from "@context/AuthContext";
import {
  Text,
  View,
  Image,
  Keyboard,
  TextInput,
  TouchableOpacity,
} from "react-native";

const EditQuiz = ({ route, navigation }) => {
  const { t } = useTranslation();
  const { id } = route.params.param;
  const { token } = React.useContext(AuthContext);
  const [loading, setLoading] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);
  const [value, setValue] = React.useState({
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    answer: "",
    categoryId: "",
  });

  const [errors, setErrors] = React.useState({
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    answer: "",
    categoryId: "",
  });

  React.useEffect(() => {
    const getWord = async () => {
      try {
        const response = await api.get(`/quiz/${id}`);

        if (response.data.status == "success") {
          response.data.data.answer = response.data.data.answer.toLowerCase();
          response.data.data.categoryId =
            response.data.data.categoryId.toString();

          setValue(response.data.data);
        } else {
          notification(
            t("axios.unknown"),
            t("axios.title", { context: "error" })
          );
          console.log(response.message);
        }
      } catch (error) {
        notification(t("axios.server"), t("axios.title", { context: "error" }));
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    getWord();
  }, []);

  const handleError = (value, name) => {
    setErrors((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleChange = (name, value) => {
    if (name == "answer") {
      value = value.toLowerCase();
    }

    setValue((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const validate = () => {
    Keyboard.dismiss();
    setLoading(true);
    setDisabled(true);

    let isValid = true;

    if (!value.question) {
      handleError(
        t("validation.required", { name: t("edit_quiz.question") }),
        "question"
      );
      isValid = false;
    } else if (value.question.length > 255) {
      handleError(
        t("validation.max", { name: t("edit_quiz.question"), max: "255" }),
        "question"
      );
      isValid = false;
    }

    if (!value.a) {
      handleError(t("validation.required", { name: t("edit_quiz.a") }), "a");
      isValid = false;
    } else if (value.a.length > 255) {
      handleError(
        t("validation.max", { name: t("edit_quiz.a"), max: "255" }),
        "a"
      );
      isValid = false;
    }

    if (!value.b) {
      handleError(t("validation.required", { name: t("edit_quiz.b") }), "b");
      isValid = false;
    } else if (value.b.length > 255) {
      handleError(
        t("validation.max", { name: t("edit_quiz.b"), max: "255" }),
        "b"
      );
      isValid = false;
    }

    if (!value.c) {
      handleError(t("validation.required", { name: t("edit_quiz.c") }), "c");
      isValid = false;
    } else if (value.c.length > 255) {
      handleError(
        t("validation.max", { name: t("edit_quiz.c"), max: "255" }),
        "c"
      );
      isValid = false;
    }

    if (!value.d) {
      handleError(t("validation.required", { name: t("edit_quiz.d") }), "d");
      isValid = false;
    } else if (value.d.length > 255) {
      handleError(
        t("validation.max", { name: t("edit_quiz.d"), max: "255" }),
        "d"
      );
      isValid = false;
    }

    if (!value.answer) {
      handleError(
        t("validation.required", { name: t("edit_quiz.answer") }),
        "answer"
      );
      isValid = false;
    } else if (value.answer.length > 255) {
      handleError(
        t("validation.max", { name: t("edit_quiz.answer"), max: "255" }),
        "answer"
      );
      isValid = false;
    }

    if (!value.categoryId) {
      handleError(
        t("validation.required", { name: t("edit_quiz.category") }),
        "categoryId"
      );
      isValid = false;
    } else if (value.categoryId.length > 255) {
      handleError(
        t("validation.max", { name: t("edit_quiz.category"), max: "255" }),
        "categoryId"
      );
      isValid = false;
    }

    if (isValid) {
      handleSubmit();
    } else {
      setLoading(false);
      setDisabled(false);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await api.put(`/quiz/${id}`, value, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.status == "success") {
        notification(
          t("axios.success", {
            action: t("edit_quiz.added", { question: value.name }),
          }),
          t("axios.title", { context: "success" })
        );
        setLoading(false);
        setDisabled(false);
        navigation.replace("Question");
      } else {
        notification(
          t("axios.unknown"),
          t("axios.title", { context: "error" })
        );
        console.log(response.message);
      }
    } catch (error) {
      notification(t("axios.server"), t("axios.title", { context: "error" }));
      console.log(error.message);
    } finally {
      setLoading(false);
      setDisabled(false);
    }
  };

  return (
    <MainLayout navigation={navigation} loading={loading}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("@images/logo.png")} />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Question")}>
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
              fontSize: 15,
              marginLeft: 70,
              color: "white",
              fontWeight: "bold",
            }}
          >
            {t("edit_quiz.title")}
          </Text>
        </View>
        <View style={styles.card}>
          <View>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 20,
                marginTop: 30,
                fontWeight: "bold",
              }}
            >
              {`${t("edit_quiz.question")} :`}
            </Text>
            <TextInput
              style={{
                marginTop: 20,
                borderRadius: 5,
                borderWidth: 1,
                height: 40,
                width: 260,
                marginLeft: 20,
                padding: 10,
                borderColor: "#ccc",
              }}
              placeholder={t("edit_quiz.question_placeholder")}
              editable={!disabled}
              value={value.question}
              onChangeText={(text) => handleChange("question", text)}
            />
            {errors.question && (
              <Text style={styles.error_teks}>{errors.question}</Text>
            )}
          </View>
          <View>
            <Text
              style={{
                fontSize: 13,
                marginLeft: 21,
                marginTop: 30,
                fontWeight: "bold",
              }}
            >
              {`${t("edit_quiz.a")} :`}
            </Text>
            <TextInput
              style={{
                marginTop: 20,
                borderRadius: 5,
                borderWidth: 1,
                height: 40,
                width: 260,
                marginLeft: 20,
                padding: 10,
                borderColor: "#ccc",
              }}
              placeholder={t("edit_quiz.a_placeholder")}
              editable={!disabled}
              value={value.a}
              onChangeText={(text) => handleChange("a", text)}
            />
            {errors.a && <Text style={styles.error_teks}>{errors.a}</Text>}
          </View>
          <View>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 20,
                marginTop: 20,
                fontWeight: "bold",
              }}
            >
              {`${t("edit_quiz.b")} :`}
            </Text>
            <TextInput
              style={{
                marginTop: 20,
                borderRadius: 5,
                borderWidth: 1,
                height: 40,
                width: 260,
                marginLeft: 20,
                padding: 10,
                borderColor: "#ccc",
              }}
              placeholder={t("edit_quiz.b_placeholder")}
              editable={!disabled}
              value={value.b}
              onChangeText={(text) => handleChange("b", text)}
            />
            {errors.b && <Text style={styles.error_teks}>{errors.b}</Text>}
          </View>
          <View>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 20,
                marginTop: 20,
                fontWeight: "bold",
              }}
            >
              {`${t("edit_quiz.c")} :`}
            </Text>
            <TextInput
              style={{
                marginTop: 20,
                borderRadius: 5,
                borderWidth: 1,
                height: 40,
                width: 260,
                marginLeft: 20,
                padding: 10,
                borderColor: "#ccc",
              }}
              placeholder={t("edit_quiz.c_placeholder")}
              editable={!disabled}
              value={value.c}
              onChangeText={(text) => handleChange("c", text)}
            />
            {errors.c && <Text style={styles.error_teks}>{errors.c}</Text>}
          </View>
          <View>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 20,
                marginTop: 20,
                fontWeight: "bold",
              }}
            >
              {`${t("edit_quiz.d")} :`}
            </Text>
            <TextInput
              style={{
                marginTop: 20,
                borderRadius: 5,
                borderWidth: 1,
                height: 40,
                width: 260,
                marginLeft: 20,
                padding: 10,
                borderColor: "#ccc",
              }}
              placeholder={t("edit_quiz.d_placeholder")}
              editable={!disabled}
              value={value.d}
              onChangeText={(text) => handleChange("d", text)}
            />
            {errors.d && <Text style={styles.error_teks}>{errors.d}</Text>}
          </View>
          <View>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 20,
                marginTop: 20,
                fontWeight: "bold",
              }}
            >
              {`${t("edit_quiz.answer")} :`}
            </Text>
            <TextInput
              style={{
                marginTop: 20,
                borderRadius: 5,
                borderWidth: 1,
                height: 40,
                width: 260,
                marginLeft: 20,
                padding: 10,
                borderColor: "#ccc",
              }}
              placeholder={t("edit_quiz.answer_placeholder")}
              editable={!disabled}
              value={value.answer}
              onChangeText={(text) => handleChange("answer", text)}
            />
            {errors.answer && (
              <Text style={styles.error_teks}>{errors.answer}</Text>
            )}
          </View>
          <View>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 20,
                marginTop: 20,
                fontWeight: "bold",
              }}
            >
              {`${t("edit_quiz.category")} :`}
            </Text>
            <TextInput
              style={{
                marginTop: 20,
                borderRadius: 5,
                borderWidth: 1,
                height: 40,
                width: 260,
                marginLeft: 20,
                padding: 10,
                borderColor: "#ccc",
              }}
              placeholder={t("edit_quiz.category_placeholder")}
              editable={!disabled}
              value={value.categoryId}
              keyboardType="numeric"
              onChangeText={(text) => handleChange("categoryId", text)}
            />
            {errors.categoryId && (
              <Text style={styles.error_teks}>{errors.categoryId}</Text>
            )}
          </View>
          <TouchableOpacity
            style={{ marginTop: 30, marginLeft: 220 }}
            onPress={validate}
          >
            <Text style={{ color: "black", fontSize: 15, fontWeight: "bold" }}>
              {t("edit_quiz.submit")}
            </Text>
          </TouchableOpacity>
        </View>
        <BottomTab navigation={navigation} />
      </View>
    </MainLayout>
  );
};

EditQuiz.propTypes = {
  navigation: PropTypes.object.isRequired,
};

EditQuiz.defaultProps = {
  navigation: {
    navigate: () => {},
  },
};

export default EditQuiz;

// Path: src\screens\EditQuiz\index.js
