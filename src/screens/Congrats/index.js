import styles from "./styles";
import * as React from "react";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { BottomTab } from "@components";
import { notification } from "@helpers";
import { Text, View, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Congrats = ({ navigation }) => {
  const [authUser, setAuthUser] = React.useState({});

  React.useEffect(() => {
    const initUser = async () => {
      try {
        const authUser = await AsyncStorage.getItem("authUser");

        if (authUser) {
          const user = JSON.parse(authUser);
          setAuthUser(user.data);
        }
      } catch (error) {
        notification("Something went wrong", "error");
        console.log(error.message);
      }
    };

    initUser();
  }, []);

  return (
    <MainLayout navigation={navigation}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("@images/logo.png")} />
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 25,
              marginTop: 10,
              marginLeft: 55,
              fontWeight: "bold",
              color: "white",
            }}
          >
            {"Congratulations"}
          </Text>
        </View>
        <View style={styles.card}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 15,
                marginTop: 25,
                color: "black",
                marginLeft: 75,
              }}
            >
              {`Hai ${authUser?.firstName} ${authUser?.lastName}, you have completed all the quizzes`}
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Certificate")}>
            <Image
              style={{
                width: 200,
                height: 130,
                marginTop: 80,
                marginLeft: 55,
                borderWidht: 1,
              }}
              source={require("@images/certificate.png")}
            />
          </TouchableOpacity>
        </View>
        <BottomTab navigation={navigation} />
      </View>
    </MainLayout>
  );
};

Congrats.propTypes = {
  navigation: PropTypes.object.isRequired,
};

Congrats.defaultProps = {
  navigation: {
    navigate: () => {},
  },
};

export default Congrats;

// Path: src\screens\Congrats\index.js
