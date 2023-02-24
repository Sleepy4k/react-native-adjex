// Import Core Libraries
import { Dimensions } from "react-native";

const Dimension = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

export default Dimension;
