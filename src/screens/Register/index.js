import styles from "./styles";
import * as React from "react";
import { api } from "@services";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { notification } from "@helpers";
import {
  Text,
  View,
  Keyboard,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Register = ({ navigation }) => {
  const [data, setData] = React.useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = React.useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirm_password: "",
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
    console.log(data);
    console.log(errors);

    let isValid = true;

    if (!data.firstname) {
      handleError("Please input first name", "firstname");
      isValid = false;
    } else if (data.firstname.length > 255) {
      handleError("First name cannot exceed 255 characters", "firstname");
      isValid = false;
    }

    if (!data.lastname) {
      handleError("Please input last name", "lastname");
      isValid = false;
    } else if (data.lastname.length > 255) {
      handleError("Last name cannot exceed 255 characters", "lastname");
      isValid = false;
    }

    if (!data.username) {
      handleError("Please input username", "username");
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

    if (!data.confirm_password) {
      handleError("Please input confirm password", "confirm_password");
      isValid = false;
    } else if (data.confirm_password < 8) {
      handleError(
        "Confirm password must be at least 8 characters",
        "confirm_password"
      );
      isValid = false;
    } else if (data.confirm_password > 255) {
      handleError(
        "Confirm password cannot exceed 255 characters",
        "confirm_password"
      );
      isValid = false;
    } else if (data.password !== data.confirm_password) {
      handleError("Password does not match", "confirm_password");
      isValid = false;
    }

    if (isValid) {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await api.post("/auth/register", data);

      if (response.data.status === "success") {
        notification("Registration success", "success");
        navigation.navigate("Login");
      } else {
        notification("Something went wrong", "error");
        console.log(response.data.message);
      }
    } catch (error) {
      notification("Server cannot be reached", "error");
      console.log(error);
    }
  };

  return (
    <MainLayout navigation={navigation}>
      <View style={styles.container}>
        <Text style={styles.paragraph}>{"REGISTER"}</Text>
        <Text style={styles.paragraph2}>
          {"Enter your details to Register"}
        </Text>
        <View>
          <TextInput
            style={styles.input}
            value={data.firstname}
            placeholder="First Name"
            onChangeText={(firstname) => handleChange("firstname", firstname)}
          />
          {errors.firstname && (
            <Text style={styles.error_teks}>{errors.firstname}</Text>
          )}
        </View>
        <View>
          <TextInput
            style={styles.input}
            value={data.lastname}
            placeholder="Last Name"
            onChangeText={(lastname) => handleChange("lastname", lastname)}
          />
          {errors.lastname && (
            <Text style={styles.error_teks}>{errors.lastname}</Text>
          )}
        </View>
        <View>
          <TextInput
            style={styles.input}
            value={data.username}
            placeholder="Username"
            onChangeText={(username) => handleChange("username", username)}
          />
          {errors.username && (
            <Text style={styles.error_teks}>{errors.username}</Text>
          )}
        </View>
        <View>
          <TextInput
            style={styles.input}
            value={data.password}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(password) => handleChange("password", password)}
          />
          {errors.password && (
            <Text style={styles.error_teks}>{errors.password}</Text>
          )}
        </View>
        <View>
          <TextInput
            style={styles.input}
            value={data.confirm_password}
            placeholder="Confirm Password"
            secureTextEntry={true}
            onChangeText={(confirm_password) =>
              handleChange("confirm_password", confirm_password)
            }
          />
          {errors.confirm_password && (
            <Text style={styles.error_teks}>{errors.confirm_password}</Text>
          )}
        </View>

        <TouchableOpacity style={styles.daftar} onPress={validate}>
          <Text style={styles.teks}>{"REGISTER"}</Text>
        </TouchableOpacity>
        <Text style={styles.notice}>
          {"Alredy have account ? "}
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.daftar1}>{" Login"}</Text>
          </TouchableOpacity>
        </Text>
        <TouchableOpacity style={styles.butonBack}>
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
