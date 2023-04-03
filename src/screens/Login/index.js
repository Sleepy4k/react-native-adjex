import styles from "./styles";
import * as React from "react";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

const Login = ({ navigation }) => {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.paragraph}>LOGIN</Text>
        <Text style={styles.paragraph2}>Enter your details to login </Text>
        <TextInput style={styles.input} placeholder="username/email" />
        <TextInput style={styles.input2} placeholder="password" />
        <TouchableOpacity style={styles.tombol}>
          <Text
            onPress={() => navigation.navigate("Dashboard")}
            style={styles.logintext}
          >
            Log In
          </Text>
        </TouchableOpacity>
        <Text style={styles.notice}>
          Dont have account?
          <TouchableOpacity>
            <Text
              onPress={() => navigation.navigate("Register")}
              style={styles.daftar}
            >
              {" "}
              Register
            </Text>
          </TouchableOpacity>
        </Text>
        <TouchableOpacity style={styles.butonBack}>
          <Text
            onPress={() => navigation.navigate("Dashboard")}
            style={styles.dashboardtext}
          >
            Back to Dashboard
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
