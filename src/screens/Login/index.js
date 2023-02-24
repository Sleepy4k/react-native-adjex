// Import Core Libraries
import { useState } from "react";
import PropTypes from "prop-types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, Keyboard, TouchableOpacity } from "react-native";

// Import Services
import { Api } from "../../services";

// Import Styles
import styles from "./styles";

// Import Layouts
import { GuestLayout } from "../../layouts";

// Import Helpers
import { Notifcation } from "../../helpers";

// Import Components
import { Loader, InputField, CustomButton } from "../../components";

const Login = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleError = (error, input) => {
    setErrors((prevValues) => ({ ...prevValues, [input]: error }));
  };

  const handleOnchange = (text, input) => {
    setValues((prevValues) => ({ ...prevValues, [input]: text }));
  };

  const validate = async () => {
    Keyboard.dismiss();

    let isValid = true;

    if (!values.username) {
      handleError("Please input username", "username");
      isValid = false;
    } else if (values.username.length > 255) {
      handleError("Username cannot exceed 255 characters", "username");
      isValid = false;
    }

    if (!values.password) {
      handleError("Please input password", "password");
      isValid = false;
    } else if (values.password.length < 8) {
      handleError("Password must have at least 8 characters", "password");
      isValid = false;
    } else if (values.password.length > 255) {
      handleError("Password cannot exceed 255 characters", "password");
      isValid = false;
    }

    if (isValid) {
      submit();
    }
  };

  const submit = () => {
    setLoading(true);

    Api.post("/auth/login", values)
      .then(function (response) {
        Notifcation(response.data.message, "Success");
        AsyncStorage.setItem(
          "authUser",
          JSON.stringify({
            data: response.data.data,
            token: response.data.token,
          })
        );
        navigation.navigate("Tab", {
          screen: "Dashboard",
        });
      })
      .catch(function (error) {
        const response = error.response;

        if (response.data == null) {
          Notifcation(response.data.data, response.data.message);
        } else {
          Notifcation("Server cant be accessed", "Server Error");
        }

        return response;
      })
      .finally(() => setLoading(false));
  };

  const handleTrial = async () => {
    await AsyncStorage.removeItem("guestSearch");

    navigation.navigate("Tab", { screen: "Dashboard" });
  };

  return (
    <GuestLayout>
      <Loader visible={loading} text={"Please Wait..."} />
      <Text style={styles.title}>{"Log In"}</Text>
      <Text style={styles.subTitle}>{"Enter Your Details to Login"}</Text>
      <View style={styles.content}>
        <InputField
          label={"Username"}
          editable={!loading}
          icon={"account-circle"}
          error={errors.username}
          defaultValue={values.username}
          placeholder={"Input your username here"}
          inputFunction={(username) => handleOnchange(username, "username")}
        />
        <InputField
          hideInput
          icon={"lock"}
          label={"Password"}
          editable={!loading}
          inputType={"password"}
          error={errors.password}
          defaultValue={values.password}
          placeholder={"Input your password here"}
          inputFunction={(password) => handleOnchange(password, "password")}
        />
        <CustomButton label={"Login"} onPress={validate} disabled={loading} />
        <CustomButton
          label={"Remove Trial"}
          onPress={handleTrial}
          disabled={loading}
        />
        <View style={styles.register}>
          <Text>{"Dont have account?"}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            disabled={loading}
          >
            <Text style={styles.navigateLink}>{" Register"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </GuestLayout>
  );
};

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Login;
