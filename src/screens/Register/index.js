import styles from "./styles";
import * as React from "react";
import { api } from "@services";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { notification } from "@helpers";
import { useTranslation } from "react-i18next";
import {
  Text,
  View,
  Keyboard,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Register = ({ navigation }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);
  const [data, setData] = React.useState({
    name: "",
    username: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = React.useState({
    name: "",
    username: "",
    password: "",
    confirm_password: "",
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

    if (!data.name) {
      handleError(
        t("validation.required", { name: t("register.name") }),
        "name"
      );
      isValid = false;
    } else if (data.name.length > 255) {
      handleError(
        t("validation.max", { name: t("register.name"), max: "255" }),
        "name"
      );
      isValid = false;
    }

    if (!data.username) {
      handleError(
        t("validation.required", { name: t("register.username") }),
        "username"
      );
      isValid = false;
    } else if (data.username.length > 255) {
      handleError(
        t("validation.max", { name: t("register.username"), max: "255" }),
        "username"
      );
      isValid = false;
    }

    if (!data.password) {
      handleError(
        t("validation.required", { name: t("register.password") }),
        "password"
      );
      isValid = false;
    } else if (data.password.length < 8) {
      handleError(
        t("validation.min", { name: t("register.password"), min: "8" }),
        "password"
      );
      isValid = false;
    } else if (data.password.length > 255) {
      handleError(
        t("validation.max", { name: t("register.password"), max: "255" }),
        "password"
      );
      isValid = false;
    } else if (data.password !== data.confirm_password) {
      handleError(t("validation.confirmed"), "password");
      isValid = false;
    }

    if (!data.confirm_password) {
      handleError(
        t("validation.required", { name: t("register.password_confirmation") }),
        "confirm_password"
      );
      isValid = false;
    } else if (data.confirm_password < 8) {
      handleError(
        t("validation.min", {
          name: t("register.password_confirmation"),
          min: "8",
        }),
        "confirm_password"
      );
      isValid = false;
    } else if (data.confirm_password > 255) {
      handleError(
        t("validation.max", {
          name: t("register.password_confirmation"),
          max: "255",
        }),
        "confirm_password"
      );
      isValid = false;
    } else if (data.password !== data.confirm_password) {
      handleError(t("validation.confirmed"), "confirm_password");
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
      const response = await api.post("/auth/register", data);

      if (response.data.status === "success") {
        notification(
          t("axios.success", {
            action: t("register.submit"),
          }),
          t("axios.title", { context: "success" })
        );
        setLoading(false);
        setDisabled(false);
        navigation.navigate("Login");
      } else {
        notification(t("axios.unkown"), t("axios.title", { context: "error" }));
        setLoading(false);
        setDisabled(false);
        console.log(response.data.message);
      }
    } catch (error) {
      notification(t("axios.server"), t("axios.title", { context: "error" }));
      setLoading(false);
      setDisabled(false);
      console.log(error.message);
    }
  };

  return (
    <MainLayout navigation={navigation} loading={loading}>
      <View style={styles.container}>
        <Text style={styles.paragraph}>{t("register.title")}</Text>
        <Text style={styles.paragraph2}>{t("register.sub_title")}</Text>
        <View>
          <TextInput
            editable={!disabled}
            style={styles.input}
            value={data.name}
            placeholder={t("register.name")}
            onChangeText={(name) => handleChange("name", name)}
          />
          {errors.name && <Text style={styles.error_teks}>{errors.name}</Text>}
        </View>
        <View>
          <TextInput
            editable={!disabled}
            style={styles.input}
            value={data.username}
            placeholder={t("register.username")}
            onChangeText={(username) => handleChange("username", username)}
          />
          {errors.username && (
            <Text style={styles.error_teks}>{errors.username}</Text>
          )}
        </View>
        <View>
          <TextInput
            editable={!disabled}
            style={styles.input}
            value={data.password}
            placeholder={t("register.password")}
            secureTextEntry={true}
            onChangeText={(password) => handleChange("password", password)}
          />
          {errors.password && (
            <Text style={styles.error_teks}>{errors.password}</Text>
          )}
        </View>
        <View>
          <TextInput
            editable={!disabled}
            style={styles.input}
            value={data.confirm_password}
            placeholder={t("register.password_confirmation")}
            secureTextEntry={true}
            onChangeText={(confirm_password) =>
              handleChange("confirm_password", confirm_password)
            }
          />
          {errors.confirm_password && (
            <Text style={styles.error_teks}>{errors.confirm_password}</Text>
          )}
        </View>

        <TouchableOpacity
          style={styles.daftar}
          onPress={validate}
          disabled={disabled}
        >
          <Text style={styles.teks}>{t("register.submit")}</Text>
        </TouchableOpacity>
        <Text style={styles.notice}>
          {`${t("register.dont_have_account")} `}
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            disabled={disabled}
          >
            <Text style={styles.daftar1}>{` ${t("register.login")}`}</Text>
          </TouchableOpacity>
        </Text>
        <TouchableOpacity
          style={styles.butonBack}
          disabled={disabled}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <Text style={styles.dashboardtext}>
            {t("register.back_to_dashboard")}
          </Text>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
};

Register.propTypes = {
  navigation: PropTypes.object.isRequired,
};

Register.defaultProps = {
  navigation: {
    navigate: () => {},
  },
};

export default Register;

// Path: src\screens\Register\index.js
