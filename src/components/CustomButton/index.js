// Import Core Libraries
import PropTypes from "prop-types";
import { Text, TouchableOpacity } from "react-native";

// Import Styles
import styles from "./styles";

const CustomButton = ({ label, styles, disabled, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
      style={styles}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

CustomButton.propTypes = {
  onPress: PropTypes.func,
  styles: PropTypes.object,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

CustomButton.defaultProps = {
  label: "",
  styles: styles.buttonTouchable,
  disabled: false,
  onPress: () => {},
};

export default CustomButton;
