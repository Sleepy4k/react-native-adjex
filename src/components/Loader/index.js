// Import Core Libraries
import PropTypes from "prop-types";
import { View, Text, ActivityIndicator } from "react-native";

// Import Consts
import { Colors } from "../../constant";

// Import Styles
import styles from "./styles";

const Loader = ({ text, visible }) => {
  return (
    visible && (
      <View style={styles.container}>
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={Colors.blue} />
          <Text style={styles.loaderText}>{text}</Text>
        </View>
      </View>
    )
  );
};

Loader.propTypes = {
  text: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
};

Loader.defaultProps = {
  text: "Loading...",
  visible: false,
};

export default Loader;
