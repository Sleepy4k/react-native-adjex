import styles from "./styles";
import * as React from "react";
import { api } from "@services";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { BottomTab } from "@components";
import { notification } from "@helpers";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Text,
  View,
  Image,
  Keyboard,
  TextInput,
  TouchableOpacity,
} from "react-native";

const EditWord = ({ route, navigation }) => {
  const { t } = useTranslation();
  const { letter } = route.params.param;
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [disabled, setDisabled] = React.useState(false);
  const [value, setValue] = React.useState({
    name: "",
    description: "",
    example: "",
  });

  const [errors, setErrors] = React.useState({
    name: "",
    description: "",
    example: "",
  });

  React.useEffect(() => {
    const initUser = async () => {
      try {
        const authUser = await AsyncStorage.getItem("authUser");

        if (authUser) {
          const user = JSON.parse(authUser);

          if (user) {
            setUser(user);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    const getWord = async () => {
      try {
        const response = await api.get(`/adjective/${letter}`);

        if (response.data.status == "success") {
          setValue(response.data.data);
        } else {
          notification(
            t("axios.unkown"),
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

    initUser();
    getWord();
  }, []);

  const handleError = (value, name) => {
    setErrors((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleChange = (name, value) => {
    setValue((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const validate = () => {
    Keyboard.dismiss();
    setDisabled(true);

    let isValid = true;

    if (!value.name) {
      handleError(
        t("validation.required", { name: t("edit_word.adjective") }),
        "name"
      );
      isValid = false;
    } else if (value.name.length > 255) {
      handleError(
        t("validation.max", { name: t("edit_word.adjective"), max: "255" }),
        "name"
      );
      isValid = false;
    }

    if (!value.description) {
      handleError(
        t("validation.required", { name: t("edit_word.description") }),
        "description"
      );
      isValid = false;
    } else if (value.description.length > 255) {
      handleError(
        t("validation.max", { name: t("edit_word.description"), max: "255" }),
        "description"
      );
      isValid = false;
    }

    if (!value.example) {
      handleError(
        t("validation.required", { name: t("edit_word.example") }),
        "example"
      );
      isValid = false;
    } else if (value.example.length > 255) {
      handleError(
        t("validation.max", { name: t("edit_word.example"), max: "255" }),
        "example"
      );
      isValid = false;
    }

    if (isValid) {
      handleSubmit();
    } else {
      setDisabled(false);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await api.put(`/adjective/${letter}`, value, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });

      if (response.data.status == "success") {
        notification(
          t("axios.success", {
            action: t("edit_word.edited", { adjective: value.name }),
          }),
          t("axios.title", { context: "success" })
        );
        setDisabled(false);
        navigation.navigate("Adjective");
      } else {
        notification(t("axios.unkown"), t("axios.title", { context: "error" }));
        console.log(response.message);
      }
    } catch (error) {
      notification(t("axios.server"), t("axios.title", { context: "error" }));
      console.log(error.message);
    } finally {
      setDisabled(false);
    }
  };

  return (
    <MainLayout navigation={navigation} loading={loading}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("@images/logo.png")} />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Adjective")}>
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
              marginLeft: 70,
              color: "white",
              fontWeight: "bold",
            }}
          >
            {t("edit_word.title")}
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
              {`${t("edit_word.adjective")} :`}
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
              placeholder={t("edit_word.adjective_placeholder")}
              editable={!disabled}
              value={value.name}
              onChangeText={(text) => handleChange("name", text)}
            />
            {errors.name && (
              <Text style={styles.error_teks}>{errors.name}</Text>
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
              {`${t("edit_word.description")} :`}
            </Text>
            <TextInput
              style={{
                marginTop: 10,
                marginLeft: 20,
                borderColor: "#ccc",
                borderWidth: 1,
                borderRadius: 10,
                fontSize: 13,
                height: 100,
                width: 260,
                backgroundColor: "none",
                padding: 10,
              }}
              placeholder={t("edit_word.description_placeholder")}
              multiline={true}
              numberOfLines={4}
              editable={!disabled}
              value={value.description}
              onChangeText={(text) => handleChange("description", text)}
            />
            {errors.description && (
              <Text style={styles.error_teks}>{errors.description}</Text>
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
              {`${t("edit_word.example")} :`}
            </Text>
            <TextInput
              style={{
                marginTop: 20,
                marginLeft: 20,
                borderColor: "#ccc",
                borderWidth: 1,
                borderRadius: 10,
                fontSize: 13,
                height: 60,
                width: 260,
                backgroundColor: "none",
                padding: 10,
              }}
              placeholder={t("edit_word.example_placeholder")}
              multiline={true}
              numberOfLines={4}
              editable={!disabled}
              value={value.example}
              onChangeText={(text) => handleChange("example", text)}
            />
            {errors.example && (
              <Text style={styles.error_teks}>{errors.example}</Text>
            )}
          </View>
          <TouchableOpacity
            style={{ marginTop: 30, marginLeft: 220 }}
            onPress={validate}
          >
            <Text style={{ color: "black", fontSize: 12, fontWeight: "bold" }}>
              {t("edit_word.submit")}
            </Text>
          </TouchableOpacity>
        </View>
        <BottomTab navigation={navigation} />
      </View>
    </MainLayout>
  );
};

EditWord.propTypes = {
  navigation: PropTypes.object.isRequired,
};

EditWord.defaultProps = {
  navigation: {
    navigate: () => {},
  },
};

export default EditWord;

// Path: src\screens\EditWord\index.js
