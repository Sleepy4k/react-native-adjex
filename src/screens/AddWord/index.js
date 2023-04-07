import styles from "./styles";
import * as React from "react";
import { api } from "@services";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { BottomTab } from "@components";
import { notification } from "@helpers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Text,
  View,
  Image,
  Keyboard,
  TextInput,
  TouchableOpacity,
} from "react-native";

const AddWord = ({ navigation }) => {
  const [user, setUser] = React.useState({});
  const [disabled, setDisabled] = React.useState(false);
  const [value, setValue] = React.useState({
    name: "",
    description: "",
    example: "",
  });

  const [errors, setErrors] = React.useState({
    name: "",
    description: "",
    example: "",
  });

  React.useEffect(() => {
    const initUser = async () => {
      const authUser = await AsyncStorage.getItem("authUser");

      if (authUser) {
        const user = JSON.parse(authUser);

        if (user) {
          setUser(user);
        }
      }
    };

    initUser();
  }, []);

  const handleError = (value, name) => {
    setErrors((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleChange = (name, value) => {
    setValue((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const validate = () => {
    Keyboard.dismiss();
    setDisabled(true);

    let isValid = true;

    if (!value.name) {
      handleError("Please input adjective", "name");
      isValid = false;
    } else if (value.name.length > 255) {
      handleError("Adjective cannot exceed 255 characters", "name");
      isValid = false;
    }

    if (!value.description) {
      handleError("Please input description", "description");
      isValid = false;
    } else if (value.description.length > 255) {
      handleError("Description cannot exceed 255 characters", "description");
      isValid = false;
    }

    if (!value.example) {
      handleError("Please input example", "example");
      isValid = false;
    } else if (value.example.length > 255) {
      handleError("Example cannot exceed 255 characters", "example");
      isValid = false;
    }

    if (isValid) {
      handleSubmit();
    } else {
      setDisabled(false);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await api.post("/adjective", value, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });

      if (response.data.status == "success") {
        notification("Successfully added", "success");
        setDisabled(false);
        navigation.navigate("Adjective");
      } else {
        notification("Something went wrong", "error");
        console.log(response.message);
      }
    } catch (error) {
      notification("Server cannot be reached", "error");
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
          <TouchableOpacity onPress={() => navigation.navigate("Adjective")}>
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
              marginLeft: 70,
              color: "white",
              fontWeight: "bold",
            }}
          >
            {"ADD ADJECTIVE"}
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
              {"ADJECTIVE :"}
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
              placeholder="Type Here"
              editable={!disabled}
              value={value.name}
              onChangeText={(text) => handleChange("name", text)}
            />
            {errors.name && (
              <Text style={styles.error_teks}>{errors.name}</Text>
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
              {"DESCRIPTION :"}
            </Text>
            <TextInput
              style={{
                marginTop: 10,
                marginLeft: 20,
                borderColor: "#ccc",
                borderWidth: 1,
                borderRadius: 10,
                fontSize: 13,
                height: 100,
                width: 260,
                backgroundColor: "none",
                padding: 10,
              }}
              placeholder="Type Here"
              multiline={true}
              numberOfLines={4}
              editable={!disabled}
              value={value.description}
              onChangeText={(text) => handleChange("description", text)}
            />
            {errors.description && (
              <Text style={styles.error_teks}>{errors.description}</Text>
            )}
          </View>
          <View>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 20,
                marginTop: 20,
                fontWeight: "bold",
              }}
            >
              {"EXAMPLE :"}
            </Text>
            <TextInput
              style={{
                marginTop: 20,
                marginLeft: 20,
                borderColor: "#ccc",
                borderWidth: 1,
                borderRadius: 10,
                fontSize: 13,
                height: 50,
                width: 260,
                backgroundColor: "none",
                padding: 10,
              }}
              placeholder="Type Here"
              multiline={true}
              numberOfLines={4}
              editable={!disabled}
              value={value.example}
              onChangeText={(text) => handleChange("example", text)}
            />
            {errors.example && (
              <Text style={styles.error_teks}>{errors.example}</Text>
            )}
          </View>
          <TouchableOpacity
            style={{ marginTop: 30, marginLeft: 220 }}
            onPress={validate}
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

AddWord.propTypes = {
  navigation: PropTypes.object.isRequired,
};

AddWord.defaultProps = {
  navigation: {
    navigate: () => {},
  },
};

export default AddWord;

// Path: src\screens\AddWord\index.js
