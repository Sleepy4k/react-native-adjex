import styles from "./styles";
import * as React from "react";
import { api } from "@services";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { notification } from "@helpers";
import { BottomTab } from "@components";
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

const Report = ({ navigation }) => {
  const { t } = useTranslation();
  const { token } = React.useContext(AuthContext);
  const [loading, setLoading] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);
  const [data, setData] = React.useState({
    title: "",
    description: "",
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

  const validate = () => {
    Keyboard.dismiss();
    setLoading(true);
    setDisabled(true);

    let isValid = true;

    if (!data.title) {
      handleError(
        t("validation.required", { name: t("report.title") }),
        "title"
      );
      isValid = false;
    } else if (data.title.length > 255) {
      handleError(
        t("validation.max", { name: t("report.title"), max: "255" }),
        "title"
      );
      isValid = false;
    }

    if (!data.description) {
      handleError(
        t("validation.required", { name: t("report.description") }),
        "description"
      );
      isValid = false;
    } else if (data.description.length > 255) {
      handleError(
        t("validation.max", { name: t("report.description"), max: "255" }),
        "description"
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
      const response = await api.post("/report", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.status == "success") {
        notification(
          t("axios.success", {
            action: t("report.added"),
          }),
          t("axios.title", { context: "success" })
        );

        setData({
          title: "",
          description: "",
        });
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
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
            disabled={disabled}
          >
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
              marginLeft: 20,
              color: "white",
              fontWeight: "bold",
            }}
          >
            {t("report.title")}
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
              {t("report.problem")}
            </Text>
            <TextInput
              editable={!disabled}
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
              onChangeText={(text) => handleChange("title", text)}
              value={data.title}
              placeholder={t("report.problem_placeholder")}
            />
            {errors.title && (
              <Text style={styles.error_teks}>{errors.title}</Text>
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
              {t("report.description")}
            </Text>
            <TextInput
              editable={!disabled}
              style={{
                marginTop: 20,
                marginLeft: 20,
                borderColor: "#ccc",
                borderWidth: 1,
                borderRadius: 10,
                fontSize: 13,
                height: 200,
                width: 260,
                backgroundColor: "none",
                padding: 10,
              }}
              multiline={true}
              numberOfLines={4}
              value={data.description}
              placeholder={t("report.description_placeholder")}
              onChangeText={(text) => handleChange("description", text)}
            />
            {errors.description && (
              <Text style={styles.error_teks}>{errors.description}</Text>
            )}
          </View>
          <TouchableOpacity
            style={{ marginTop: 25, marginLeft: 220 }}
            onPress={validate}
            disabled={disabled}
          >
            <Text style={{ color: "black", fontSize: 15, fontWeight: "bold" }}>
              {t("report.submit")}
            </Text>
          </TouchableOpacity>
        </View>
        <BottomTab navigation={navigation} disabled={disabled} />
      </View>
    </MainLayout>
  );
};

Report.propTypes = {
  navigation: PropTypes.object.isRequired,
};

Report.defaultProps = {
  navigation: {
    navigate: () => {},
  },
};

export default Report;

// Path: src\screens\Report\index.js
