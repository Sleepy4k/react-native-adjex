import styles from "./styles";
import PropTypes from "prop-types";
import { View, Image, TouchableOpacity } from "react-native";

const BottomTab = ({ navigation }) => {
  return (
    <View style={styles.tombol}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
          <Image
            style={{ width: 35, height: 35, marginLeft: 30, marginTop: 10 }}
            source={require("@images/home-icon.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <Image
            style={{ width: 55, height: 55, marginTop: 3, marginLeft: 60 }}
            source={require("@images/search-icon.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image
            style={{ width: 35, height: 35, marginLeft: 60, marginTop: 10 }}
            source={require("@images/profile-icon.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

BottomTab.propTypes = {
  navigation: PropTypes.object.isRequired,
};

BottomTab.defaultProps = {
  navigation: {
    navigate: () => {},
  },
};

export default BottomTab;

// Path: src\components\BottomTab\index.js
