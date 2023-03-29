import styles from "./styles";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const Dashboard = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={styles.dasboardScreen}>
          <Image
            style={styles.dasboardScreenChild}
            resizeMode="cover"
            source={require("@images/rectangle-50.png")}
          />
          <Text style={styles.dashboard}>Dashboard</Text>
          <View style={styles.rectangleParent}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Stack", { screen: "Home" })}
            >
              <Image
                style={[styles.groupChild, styles.groupLayout]}
                resizeMode="cover"
                source={require("@images/rectangle-23.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Stack", { screen: "Tutorial" })
              }
            >
              <Image
                style={[styles.groupItem, styles.groupLayout]}
                resizeMode="cover"
                source={require("@images/rectangle-22.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Stack", { screen: "Quiz" })}
            >
              <Image
                style={[styles.groupInner, styles.groupInnerLayout]}
                resizeMode="cover"
                source={require("@images/rectangle-52.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Stack", { screen: "Certificate" })
              }
            >
              <Image
                style={[styles.rectangleIcon, styles.groupInnerLayout]}
                resizeMode="cover"
                source={require("@images/rectangle-221.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.banner, styles.bannerLayout]}>
            <Image
              style={[styles.adjexBanner1, styles.bannerLayout]}
              resizeMode="cover"
              source={require("@images/banner.png")}
            />
          </View>
          <Text style={[styles.quiz, styles.quizTypo]}>Quiz</Text>
          <Text style={[styles.certificate, styles.quizTypo]}>Certificate</Text>
          <Text style={[styles.homeScreen, styles.tutorialTypo]}>
            Home Screen
          </Text>
          <Text style={[styles.tutorial, styles.tutorialTypo]}>Tutorial</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

Dashboard.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Dashboard;

// Path: src\screens\Dashboard\index.js
