import styles from "./styles";
import * as React from "react";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { BottomTab } from "@components";
import { Text, View, Image, TouchableOpacity } from "react-native";

const DetailWord = ({ route, navigation }) => {
  const { word } = route.params.param;

  return (
    <MainLayout>
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
          <Text
            style={{
              fontSize: 20,
              marginLeft: 20,
              marginTop: 30,
              fontWeight: "bold",
            }}
          >
            Descirption
          </Text>
          <Text style={{ color: "black", margin: 10, padding: 10 }}>
            Kata jealous sering digunakan ketika kita tidak suka ada orang lain
            yang menunjukkan ketertarikan pada pasangan, atau sebaliknya. Selain
            itu, jealous juga bisa digunakan ketika seorang anak tidak suka
            orangtuanya lebih menyayangi anak yang lain.
          </Text>
          <Text
            style={{
              fontSize: 20,
              marginLeft: 20,
              marginTop: 30,
              fontWeight: "bold",
            }}
          >
            Example
          </Text>
          <Text style={{ color: "black", margin: 10, padding: 10 }}>
            Berikut ini beberapa contoh penggunaan kata dari kata jealous :
          </Text>
          <Text style={{ color: "black", marginLeft: 20 }}>
            -He jealous that you're going to the vacation!
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
        index: 1,
      },
    },
  },
  navigation: {
    navigate: () => {},
  },
};

export default DetailWord;

// Path: src\screens\DetailWord\index.js
