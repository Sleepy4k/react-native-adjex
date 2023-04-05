import styles from "./styles";
import * as React from "react";
import { api } from "@services";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { BottomTab } from "@components";
import { notification } from "@helpers";
import { Text, View, Image, TouchableOpacity } from "react-native";

const DetailWord = ({ route, navigation }) => {
  const { word } = route.params.param;
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const initData = async () => {
      try {
        const response = await api.get(`/adjective/${word}`);

        if (response.data.status == "success") {
          setData(response.data.data);
        } else {
          notification("Something went wrong", "error");
          console.log(response.message);
        }
      } catch (error) {
        notification("Server cannot be reached", "error");
        console.log(error.message);
      }
    };

    initData();
  }, []);

  return (
    <MainLayout navigation={navigation}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("@images/logo.jpg")} />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              style={{ width: 25, height: 25, marginLeft: -10, marginTop: 10 }}
              source={require("@images/back-white-icon.png")}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 17,
              marginTop: 10,
              marginLeft: 50,
              fontWeight: "bold",
              color: "white",
            }}
          >
            {word}
          </Text>
        </View>
        <View style={styles.card}>
          {data && data.description == null && (
            <>
              <Text
                style={{
                  fontSize: 20,
                  marginLeft: 20,
                  marginTop: 30,
                  fontWeight: "bold",
                }}
              >
                {"Error"}
              </Text>
              <Text style={{ color: "black", margin: 10, padding: 10 }}>
                {"Word not found, please try again"}
              </Text>
            </>
          )}
          {data && data.description && (
            <Text
              style={{
                fontSize: 20,
                marginLeft: 20,
                marginTop: 30,
                fontWeight: "bold",
              }}
            >
              {"Description"}
            </Text>
          )}
          <Text style={{ color: "black", margin: 10, padding: 10 }}>
            {data && data.description}
          </Text>
          {data && data.example && (
            <>
              <Text
                style={{
                  fontSize: 20,
                  marginLeft: 20,
                  marginTop: 30,
                  fontWeight: "bold",
                }}
              >
                {"Example"}
              </Text>
              <Text style={{ color: "black", margin: 10, padding: 10 }}>
                {"Here are some examples of the use of the word from the word "}
                {word}
                {" :"}
              </Text>
            </>
          )}
          <Text style={{ color: "black", marginLeft: 20 }}>
            {data && data.example}
          </Text>
        </View>
        <BottomTab navigation={navigation} />
      </View>
    </MainLayout>
  );
};

DetailWord.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

DetailWord.defaultProps = {
  route: {
    params: {
      param: {
        word: "",
      },
    },
  },
  navigation: {
    navigate: () => {},
  },
};

export default DetailWord;

// Path: src\screens\DetailWord\index.js
