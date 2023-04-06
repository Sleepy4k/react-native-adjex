import styles from "./styles";
import * as React from "react";
import { api } from "@services";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { notification } from "@helpers";
import { BottomTab } from "@components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";

const Report = ({ navigation }) => {
  const [disabled, setDisabled] = React.useState(false);
  const [data, setData] = React.useState({
    title: "",
    description: "",
  });

  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    setDisabled(true);

    try {
      if (!data.title || !data.description) {
        notification("Please fill all field", "error");
        return;
      }

      const authUser = await AsyncStorage.getItem("authUser");

      if (!authUser) {
        notification("Please login first", "error");
        return;
      }

      const response = await api.post("/report", data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(authUser).token}`,
        },
      });

      if (response.data.status == "success") {
        notification("Report has been sent", "success");

        setData({
          title: "",
          description: "",
        });
      } else {
        notification("something went wrong", "error");
        console.log(response.message);
      }
    } catch (error) {
      notification("something went wrong", "error");
      console.log(error.message);
    } finally {
      setDisabled(false);
    }
  };

  return (
    <MainLayout navigation={navigation}>
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
            placeholder={"Type Here"}
            onChangeText={(text) => handleChange("description", text)}
          />
          <TouchableOpacity
            style={{ marginTop: 70, marginLeft: 220 }}
            onPress={handleSubmit}
            disabled={disabled}
          >
            <Text style={{ color: "black", fontSize: 12, fontWeight: "bold" }}>
              {"SUBMIT"}
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
