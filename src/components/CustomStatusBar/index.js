// Import Core Libraries
import PropTypes from "prop-types";
import { View, StatusBar } from "react-native";

// Import Consts
import { Colors } from "../../constant";

const CustomStatusBar = ({
  hidden,
  animated,
  translucent,
  barStyle,
  backgroundColor,
  networkActivityIndicatorVisible,
}) => {
  return (
    <View>
      <StatusBar
        hidden={hidden}
        animated={animated}
        translucent={translucent}
        barStyle={barStyle}
        backgroundColor={backgroundColor}
        networkActivityIndicatorVisible={networkActivityIndicatorVisible}
      />
    </View>
  );
};

CustomStatusBar.propTypes = {
  hidden: PropTypes.bool.isRequired,
  animated: PropTypes.bool.isRequired,
  translucent: PropTypes.bool.isRequired,
  barStyle: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  networkActivityIndicatorVisible: PropTypes.bool.isRequired,
};

CustomStatusBar.defaultProps = {
  hidden: false,
  animated: true,
  translucent: true,
  barStyle: "dark-content",
  backgroundColor: Colors.lightDeepBlue,
  networkActivityIndicatorVisible: false,
};

export default CustomStatusBar;
