import styles from "./styles";
import * as React from "react";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { BottomTab } from "@components";
import { Text, View, Image, TouchableOpacity } from "react-native";

const Tutorial = ({ navigation }) => {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("@images/logo.jpg")} />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
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
            Tutorial
          </Text>
          <Text
            style={{
              fontSize: 17,
              marginTop: 10,
              marginLeft: 10,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Video
          </Text>
        </View>
        <View style={styles.card}>
          <View style={styles.card1}>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  width: 45,
                  height: 45,
                  backgroundColor: "darkblue",
                  marginTop: 12,
                  marginLeft: 10,
                  borderRadius: 5,
                }}
              >
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    marginLeft: 12,
                    marginTop: 10,
                  }}
                  source={require("@images/play-icon.png")}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 17,
                  marginTop: 20,
                  marginLeft: 20,
                  fontWeight: "bold",
                }}
              >
                Video
              </Text>
              <Text style={{ fontSize: 10, marginTop: 40, marginLeft: 100 }}>
                02.00
              </Text>
            </View>
          </View>
          <View style={styles.card1}>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  width: 45,
                  height: 45,
                  backgroundColor: "darkblue",
                  marginTop: 12,
                  marginLeft: 10,
                  borderRadius: 5,
                }}
              >
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    marginLeft: 12,
                    marginTop: 10,
                  }}
                  source={require("@images/play-icon.png")}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 17,
                  marginTop: 20,
                  marginLeft: 20,
                  fontWeight: "bold",
                }}
              >
                Video
              </Text>
              <Text style={{ fontSize: 10, marginTop: 40, marginLeft: 100 }}>
                02.00
              </Text>
            </View>
          </View>
          <View style={styles.card1}>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  width: 45,
                  height: 45,
                  backgroundColor: "darkblue",
                  marginTop: 12,
                  marginLeft: 10,
                  borderRadius: 5,
                }}
              >
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    marginLeft: 12,
                    marginTop: 10,
                  }}
                  source={require("@images/play-icon.png")}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 17,
                  marginTop: 20,
                  marginLeft: 20,
                  fontWeight: "bold",
                }}
              >
                Video
              </Text>
              <Text style={{ fontSize: 10, marginTop: 40, marginLeft: 100 }}>
                02.00
              </Text>
            </View>
          </View>
        </View>
        <BottomTab navigation={navigation} />
      </View>
    </MainLayout>
  );
};

Tutorial.propTypes = {
  navigation: PropTypes.object.isRequired,
};

Tutorial.defaultProps = {
  navigation: {
    navigate: () => {},
  },
};

export default Tutorial;

// Path: src\screens\Tutorial\index.js
