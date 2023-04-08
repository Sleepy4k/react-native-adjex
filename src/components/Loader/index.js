import styles from "./styles";
import * as React from "react";
import PropTypes from "prop-types";
import { ActivityIndicator } from "react-native";

const Loader = ({ show, size, color }) => {
  return show ? (
    <ActivityIndicator size={size} color={color} style={styles.loader} />
  ) : null;
};

Loader.propTypes = {
  show: PropTypes.bool.isRequired,
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

Loader.defaultProps = {
  show: false,
  size: "large",
  color: "#0000ff",
};

export default Loader;

// Path: src\components\Loader\index.js
