import styles from "./styles";
import PropTypes from "prop-types";
import { colors } from "@constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({ name, size, color, style, ...props }) => {
  return (
    <MaterialCommunityIcons
      name={name}
      size={size}
      color={color}
      style={style}
      {...props}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
  color: PropTypes.string,
};

Icon.defaultProps = {
  name: "person",
  style: styles.icon,
  size: 20,
  color: colors.darkBlue,
};

export default Icon;

// Path: src\components\Icon\index.js
