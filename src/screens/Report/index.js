import styles from "./styles";
import * as React from "react";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { BottomTab } from "@components";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";

const Report = ({ navigation }) => {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("@images/logo.jpg")} />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
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
            {" "}
            LAPORAN BUG{" "}
          </Text>
        </View>
        <View style={styles.card}>
          <Text
            style={{
              fontSize: 15,
              marginLeft: 20,
              marginTop: 30,
              fontWeight: "bold",
            }}
          >
            GANGGUAN YANG DIALAMI
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
            placeholder="Ketik Disini"
          ></TextInput>
          <Text
            style={{
              fontSize: 13,
              marginLeft: 21,
              marginTop: 30,
              fontWeight: "bold",
            }}
          >
            DETAIL GANGGUAN/ MASALAH
          </Text>
          <TextInput
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
            placeholder="Ketik disini secara detail"
            multiline={true}
            numberOfLines={4}
          />
        </View>
        <BottomTab navigation={navigation} />
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
