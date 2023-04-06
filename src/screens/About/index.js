import styles from "./styles";
import * as React from "react";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { BottomTab } from "@components";
import { Text, View, Image, TouchableOpacity } from "react-native";

const About = ({ navigation }) => {
  return (
    <MainLayout navigation={navigation}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("@images/logo.png")} />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image
              style={styles.back_icon}
              source={require("@images/back-white-icon.png")}
            />
          </TouchableOpacity>
          <Text style={styles.title}>{"ABOUT US"}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.sub_title}>{"About"}</Text>
          <Text style={styles.paragraph}>
            {
              "We are a service provider engaged in the field of education, by making this application, hopefully it can be useful to be able to learn adjectives anywhere and anytime"
            }
          </Text>
          <Text style={styles.sub_title}>{"Team"}</Text>
          <Text style={styles.paragraph}>
            {
              "In making this application, the hard work of our team, which consists of :"
            }
          </Text>
          <Text style={styles.list}>{"- Akmal Hikmah (12)"}</Text>
          <Text style={styles.list}>{"- Andika Neviantoro (21)"}</Text>
          <Text style={styles.list}>{"- Apri Pandu Wicaksono (26)"}</Text>
        </View>
        <BottomTab navigation={navigation} />
      </View>
    </MainLayout>
  );
};

About.propTypes = {
  navigation: PropTypes.object.isRequired,
};

About.defaultProps = {
  navigation: {
    navigate: () => {},
  },
};

export default About;

// Path: src\screens\About\index.js
