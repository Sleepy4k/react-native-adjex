import styles from "./styles";
import PropTypes from "prop-types";
import { View, Image, TouchableOpacity } from "react-native";

const BottomTab = ({ navigation, style }) => {
  return (
    <View style={style}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigation.replace("Dashboard")}>
          <Image
            style={{ width: 35, height: 35, marginLeft: 30, marginTop: 10 }}
            source={require("@images/home-icon.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.replace("Search")}>
          <Image
            style={{ width: 55, height: 55, marginTop: 3, marginLeft: 60 }}
            source={require("@images/search-icon.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.replace("Profile")}>
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
  style: PropTypes.object,
};

BottomTab.defaultProps = {
  navigation: {
    navigate: () => {},
  },
  style: styles.tombol,
};

export default BottomTab;

// Path: src\components\BottomTab\index.js
