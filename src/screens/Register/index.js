// Import Core Libraries
import { useState } from "react";
import PropTypes from "prop-types";
import { View, Text, Keyboard, TouchableOpacity } from "react-native";

// Import Services
import { Api } from "../../services";

// Import Styles
import styles from "./styles";

// Import Helpers
import { Notifcation } from "../../helpers";

// Import Layouts
import { GuestLayout } from "../../layouts";

// Import Components
import { Loader, InputField, CustomButton } from "../../components";

const Register = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    password_confirmation: "",
  });

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    password_confirmation: "",
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

    if (!values.firstname) {
      handleError("Please input first name", "firstname");
      isValid = false;
    } else if (values.firstname.length > 255) {
      handleError("First name cannot exceed 255 characters", "firstname");
      isValid = false;
    }

    if (!values.lastname) {
      handleError("Please input last name", "lastname");
      isValid = false;
    } else if (values.lastname.length > 255) {
      handleError("Last name cannot exceed 255 characters", "lastname");
      isValid = false;
    }

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

    if (!values.password_confirmation) {
      handleError(
        "Please input password confirmation",
        "password_confirmation"
      );
      isValid = false;
    } else if (values.password_confirmation.length < 8) {
      handleError(
        "Password confirmation must have at least 8 characters",
        "password_confirmation"
      );
      isValid = false;
    } else if (values.password_confirmation.length > 255) {
      handleError(
        "Password confirmation cannot exceed 255 characters",
        "password_confirmation"
      );
      isValid = false;
    }

    if (values.password != values.password_confirmation) {
      handleError("Password does not match with confirmation", "password");
      handleError(
        "Password does not match with confirmation",
        "password_confirmation"
      );
      isValid = false;
    }

    if (isValid) {
      submit();
    }
  };

  const submit = () => {
    setLoading(true);

    Api.post("/auth/register", values)
      .then(function (response) {
        Notifcation(response.data.message, "Success");
        navigation.navigate("Login");
      })
      .catch(function (error) {
        const response = error.response;

        if (response.data == null) {
          Notifcation("Server cant be reached", "Server Error");
        } else {
          Notifcation(response.data.data, response.data.message);
        }

        return response;
      })
      .finally(() => setLoading(false));
  };

  return (
    <GuestLayout>
      <Loader visible={loading} text={"Please Wait..."} />
      <Text style={styles.title}>{"Register"}</Text>
      <Text style={styles.subTitle}>{"Enter Your Details to Register"}</Text>
      <View style={styles.content}>
        <InputField
          label={"First Name"}
          error={errors.firstname}
          editable={!loading}
          icon={"account-circle"}
          defaultValue={values.firstname}
          placeholder={"Input your first name here"}
          inputFunction={(firstname) => handleOnchange(firstname, "firstname")}
        />
        <InputField
          label={"Last Name"}
          error={errors.lastname}
          editable={!loading}
          icon={"account-circle"}
          defaultValue={values.lastname}
          placeholder={"Input your last name here"}
          inputFunction={(lastname) => handleOnchange(lastname, "lastname")}
        />
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
        <InputField
          hideInput
          icon={"lock"}
          editable={!loading}
          inputType={"password"}
          label={"Password Confirmation"}
          error={errors.password_confirmation}
          defaultValue={values.password_confirmation}
          placeholder={"Input your same password here"}
          inputFunction={(password_confirmation) =>
            handleOnchange(password_confirmation, "password_confirmation")
          }
        />
        <CustomButton
          label={"Register"}
          onPress={validate}
          disabled={loading}
        />
        <View style={styles.login}>
          <Text>{"Already have account?"}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            disabled={loading}
          >
            <Text style={styles.navigateLink}>{" Login"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </GuestLayout>
  );
};

Register.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Register;
