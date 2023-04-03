import styles from "./styles";
import * as React from "react";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { BottomTab } from "@components";
import { Text, View, Image, TouchableOpacity } from "react-native";

const About = ({ navigation }) => {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("@images/logo.jpg")} />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image
              style={styles.back_icon}
              source={require("@images/back-white-icon.png")}
            />
          </TouchableOpacity>
          <Text style={styles.title}>{"TENTANG KAMI"}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.sub_title}>{"About Us"}</Text>
          <Text style={styles.paragraph}>
            {
              "Kami adalah penyedia sebuah layanan yang bergerak dalam bidang pendidikan, dengan di buat nya aplikasi ini semoga bisa berguna untuk bisa belajar kata adjective dimana pun dan kapan pun"
            }
          </Text>
          <Text style={styles.sub_title}>{"Team"}</Text>
          <Text style={styles.paragraph}>
            {
              "Dalam pembuatan aplikasi ini tidak luput dari kerja keras nya team kami yang beranggotakan :"
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
