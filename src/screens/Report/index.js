import styles from "./styles";
import * as React from "react";
import { api } from "@services";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { notification } from "@helpers";
import { BottomTab } from "@components";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";

const Report = ({ navigation }) => {
  const [data, setData] = React.useState({
    title: "",
    report: "",
  });

  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      if (!data.title || !data.report) {
        notification("Please fill all field", "error");
        return;
      }

      const response = await api.post("/report", {
        report: "test",
      });

      if (response.data.status == "success") {
        notification("Report has been sent", "success");

        setData({
          title: "",
          report: "",
        });
      } else {
        notification("something went wrong", "error");
        console.log(response.message);
      }
    } catch (error) {
      notification("something went wrong", "error");
      console.log(error.message);
    }
  };

  return (
    <MainLayout navigation={navigation}>
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
            {"REPORT BUG"}
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
            {"YOUR TROUBLE / PROBLEM"}
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
            onChangeText={(text) => handleChange("title", text)}
            value={data.title}
            placeholder={"Type Here"}
          ></TextInput>
          <Text
            style={{
              fontSize: 13,
              marginLeft: 21,
              marginTop: 30,
              fontWeight: "bold",
            }}
          >
            {"DETAIL TROUBLE / PROBLEM"}
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
            placeholder={"Type Here"}
            multiline={true}
            numberOfLines={4}
            onChangeText={(text) => handleChange("report", text)}
            value={data.report}
          />
          <TouchableOpacity
            style={{ marginTop: 70, marginLeft: 220 }}
            onPress={handleSubmit}
          >
            <Text style={{ color: "black", fontSize: 12, fontWeight: "bold" }}>
              {"SUBMIT"}
            </Text>
          </TouchableOpacity>
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
