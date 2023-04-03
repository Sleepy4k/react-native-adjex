import styles from "./styles";
import * as React from "react";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { BottomTab } from "@components";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("@images/logo.jpg")} />
        <View style={styles.card}>
          <ScrollView style={styles.container}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("DetailWord", {
                  params: { word: "Jealous" },
                })
              }
            >
              <View style={styles.card1}>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    style={{
                      width: 45,
                      height: 45,
                      marginLeft: 10,
                      marginTop: 1 / 2,
                    }}
                    source={require("@images/book-icon.png")}
                  />
                  <Text
                    style={{
                      fontSize: 17,
                      marginTop: 10,
                      marginLeft: 20,
                      fontWeight: "bold",
                    }}
                  >
                    Jealous
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <BottomTab navigation={navigation} />
      </View>
    </MainLayout>
  );
};

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

Home.defaultProps = {
  navigation: {
    navigate: () => {},
  },
};

export default Home;

// Path: src\screens\Home\index.js
