import styles from "./styles";
import * as React from "react";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

const Register = ({ navigation }) => {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.paragraph}>REGISTER</Text>
        <Text style={styles.paragraph2}>Enter your details to Register</Text>
        <TextInput style={styles.input} placeholder="username" />
        <TextInput style={styles.input} placeholder="email/no hp" />
        <TextInput style={styles.input} placeholder="password" />
        <TextInput style={styles.input} placeholder="confrim password" />
        <TouchableOpacity
          style={styles.daftar}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.teks}>REGISTER</Text>
        </TouchableOpacity>
        <Text style={styles.notice}>
          Alredy have account?
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.daftar1}>{" Login"}</Text>
          </TouchableOpacity>
        </Text>
        <TouchableOpacity style={styles.butonBack}>
          <Text
            onPress={() => navigation.navigate("Home")}
            style={styles.dashboardtext}
          >
            Back to Dashboard
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
