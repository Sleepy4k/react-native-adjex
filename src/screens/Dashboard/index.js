// Import Core Libraries
import PropTypes from "prop-types";
import { View, Image, Text, TouchableOpacity } from "react-native";

// Import Styles
import styles from "./styles";

// Import Layouts
import { AuthLayout } from "../../layouts";

const Dashboard = ({ navigation }) => {
  return (
    <AuthLayout navigation={navigation}>
      <View style={styles.dasboardScreen}>
        <View style={[styles.banner, styles.bannerLayout]}>
          <Image
            style={[styles.adjexBanner, styles.bannerLayout]}
            resizeMode="cover"
            source={require("../../../assets/banner.png")}
          />
        </View>
        <Text style={[styles.dashboard, styles.dashboardPosition]}>
          {"Dashboard"}
        </Text>
        <Image
          style={styles.dasboardScreenChild}
          resizeMode="cover"
          source={require("../../../assets/rectangle-50.png")}
        />
        <View style={[styles.rectangleParent, styles.dashboardPosition]}>
          <TouchableOpacity>
            <Image
              style={[styles.rectangleIcon, styles.groupLayout]}
              resizeMode="cover"
              source={require("../../../assets/rectangle-221.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={[styles.groupTop, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../../../assets/rectangle-23.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={[styles.groupItem, styles.groupLayout]}
              resizeMode="cover"
              source={require("../../../assets/rectangle-22.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={[styles.groupInner, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../../../assets/rectangle-52.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </AuthLayout>
  );
};

Dashboard.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Dashboard;
