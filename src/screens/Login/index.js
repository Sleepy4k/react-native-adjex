import styles from "./styles";
import * as React from "react";
import { api } from "@services";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { notification } from "@helpers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Text,
  View,
  Keyboard,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Login = ({ navigation }) => {
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
    setErrors({
      ...errors,
      [name]: value,
    });
  };

  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const validate = async () => {
    Keyboard.dismiss();
    setDisabled(true);

    let isValid = true;

    if (!data.username) {
      handleError("Please input username", "username");
      isValid = false;
    } else if (data.username.length > 255) {
      handleError("Username cannot exceed 255 characters", "username");
      isValid = false;
    }

    if (!data.password) {
      handleError("Please input password", "password");
      isValid = false;
    } else if (data.password.length < 8) {
      handleError("Password must be at least 8 characters", "password");
      isValid = false;
    } else if (data.password.length > 255) {
      handleError("Password cannot exceed 255 characters", "password");
      isValid = false;
    }

    if (isValid) {
      handleSubmit();
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

        notification("Login success", "success");
        setDisabled(false);
        navigation.replace("Dashboard");
      } else {
        console.log(response.data.message);
        setDisabled(false);
        notification("Something went wrong", "error");
      }
    } catch (error) {
      console.log(error.message);
      setDisabled(false);
      notification("Server cannot be reached", "error");
    }
  };

  return (
    <MainLayout navigation={navigation}>
      <View style={styles.container}>
        <Text style={styles.paragraph}>{"LOGIN"}</Text>
        <Text style={styles.paragraph2}>{"Enter your details to login"}</Text>
        <View>
          <TextInput
            editable={!disabled}
            style={styles.input}
            placeholder="Username"
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
            placeholder="Password"
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
          <Text style={styles.logintext}>{"Log In"}</Text>
        </TouchableOpacity>
        <Text style={styles.notice}>
          {"Dont have account ? "}
          <TouchableOpacity>
            <Text
              disabled={disabled}
              onPress={() => navigation.navigate("Register")}
              style={styles.daftar}
            >
              {" Register"}
            </Text>
          </TouchableOpacity>
        </Text>
        <TouchableOpacity style={styles.butonBack} disabled={disabled}>
          <Text
            onPress={() => navigation.navigate("Dashboard")}
            style={styles.dashboardtext}
          >
            {"Back to Dashboard"}
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
