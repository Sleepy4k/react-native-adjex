import styles from "./styles";
import * as React from "react";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { BottomTab } from "@components";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";

const Search = ({ navigation }) => {
  return (
    <MainLayout navigation={navigation}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("@images/logo.jpg")} />
        <View style={{ flexDirection: "row" }}>
          <TextInput
            style={{
              borderRadius: 10,
              borderWidth: 1,
              height: 40,
              width: 280,
              marginLeft: -20,
              padding: 10,
              backgroundColor: "white",
            }}
            placeholder="Search Your History"
          ></TextInput>
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              backgroundColor: "white",
              borderRadius: 10,
              marginLeft: 10,
            }}
          >
            <Image
              style={{ width: 35, height: 35, marginTop: 2, marginLeft: 2 }}
              source={require("@images/search-icon.png")}
            />
          </TouchableOpacity>
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
            Search History
          </Text>
        </View>
        <BottomTab navigation={navigation} />
      </View>
    </MainLayout>
  );
};

Search.propTypes = {
  navigation: PropTypes.object.isRequired,
};

Search.defaultProps = {
  navigation: {
    navigate: () => {},
  },
};

export default Search;

// Path: src\screens\Search\index.js
