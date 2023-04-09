import styles from "./styles";
import * as React from "react";
import { api } from "@services";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { notification } from "@helpers";
import { useTranslation } from "react-i18next";
import { AuthContext } from "@context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Text,
  View,
  Keyboard,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Login = ({ navigation }) => {
  const { t } = useTranslation();
  const { refresh } = React.useContext(AuthContext);
  const [loading, setLoading] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);
  const [data, setData] = React.useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    username: "",
    password: "",
  });

  const handleError = (value, name) => {
    setErrors((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleChange = (name, value) => {
    setData((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const validate = async () => {
    Keyboard.dismiss();
    setLoading(true);
    setDisabled(true);

    let isValid = true;

    if (!data.username) {
      handleError(
        t("validation.required", { name: t("login.username") }),
        "username"
      );
      isValid = false;
    } else if (data.username.length > 255) {
      handleError(
        t("validation.max", { name: t("login.username"), max: "255" }),
        "username"
      );
      isValid = false;
    }

    if (!data.password) {
      handleError(
        t("validation.required", { name: t("login.password") }),
        "password"
      );
      isValid = false;
    } else if (data.password.length < 8) {
      handleError(
        t("validation.min", { name: t("login.password"), min: "8" }),
        "password"
      );
      isValid = false;
    } else if (data.password.length > 255) {
      handleError(
        t("validation.max", { name: t("login.password"), max: "255" }),
        "password"
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
      const response = await api.post("/auth/login", data);

      if (response.data.status === "success") {
        await AsyncStorage.setItem(
          "authUser",
          JSON.stringify({
            data: response.data.data,
            token: response.data.token,
          })
        );

        notification(
          t("axios.success", {
            action: t("login.submit"),
          }),
          t("axios.title", { context: "success" })
        );
        setLoading(false);
        setDisabled(false);
        refresh();
        navigation.replace("Dashboard");
      } else {
        console.log(response.data.message);
        setLoading(false);
        setDisabled(false);
        notification(
          t("axios.unknown"),
          t("axios.title", { context: "error" })
        );
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
      setDisabled(false);
      notification(t("axios.server"), t("axios.title", { context: "error" }));
    }
  };

  return (
    <MainLayout navigation={navigation} loading={loading}>
      <View style={styles.container}>
        <Text style={styles.paragraph}>{t("login.title")}</Text>
        <Text style={styles.paragraph2}>{t("login.sub_title")}</Text>
        <View>
          <TextInput
            editable={!disabled}
            style={styles.input}
            placeholder={t("login.username")}
            onChangeText={(username) => handleChange("username", username)}
          />
          {errors.username && (
            <Text style={styles.error_teks}>{errors.username}</Text>
          )}
        </View>
        <View>
          <TextInput
            editable={!disabled}
            style={styles.input2}
            placeholder={t("login.password")}
            secureTextEntry={true}
            onChangeText={(password) => handleChange("password", password)}
          />
          {errors.password && (
            <Text style={styles.error_teks}>{errors.password}</Text>
          )}
        </View>
        <TouchableOpacity
          style={styles.tombol}
          onPress={validate}
          disabled={disabled}
        >
          <Text style={styles.logintext}>{t("login.submit")}</Text>
        </TouchableOpacity>
        <Text style={styles.notice}>
          {`${t("login.dont_have_account")} `}
          <TouchableOpacity
            disabled={disabled}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.daftar}>{`  ${t("login.register")}`}</Text>
          </TouchableOpacity>
        </Text>
        <TouchableOpacity
          style={styles.butonBack}
          onPress={() => navigation.navigate("Dashboard")}
          disabled={disabled}
        >
          <Text style={styles.dashboardtext}>
            {t("login.back_to_dashboard")}
          </Text>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
};

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
};

Login.defaultProps = {
  navigation: {
    navigate: () => {},
  },
};

export default Login;

// Path: src\screens\Login\index.js
