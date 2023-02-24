// Import Core Libraries
import { StyleSheet } from "react-native";

// Import Consts
import { Colors } from "../../constant";

// Import Helpers
import { Responsive } from "../../helpers";

const styles = StyleSheet.create({
  searchScreen: {
    width: "100%",
    height: Responsive.vertical(800),
    backgroundColor: Colors.lightDeepBlue,
  },
  bannerLayout: {
    width: "100%",
    position: "absolute",
    top: Responsive.vertical(17),
    height: Responsive.vertical(100),
    backgroundColor: Colors.lightDeepBlue,
  },
  search: {
    top: Responsive.vertical(130),
    justifyContent: "space-evenly",
    height: Responsive.vertical(102),
    paddingLeft: Responsive.horizontal(25),
    paddingRight: Responsive.horizontal(25),
  },
  searchPosition: {
    width: "100%",
    position: "absolute",
    left: Responsive.horizontal(0),
  },
  searchFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  adjective: {
    top: Responsive.vertical(239),
    height: Responsive.vertical(632),
  },
  background: {
    top: Responsive.vertical(6),
    backgroundColor: Colors.yellow,
    height: Responsive.vertical(681),
    borderRadius: Responsive.moderate(60),
  },
  topAdjectiveSearch: {
    width: "100%",
    top: Responsive.vertical(34),
    left: Responsive.horizontal(34),
    fontSize: Responsive.moderate(20),
  },
  lonelyTypo: {
    textAlign: "left",
    fontWeight: "bold",
    color: Colors.black,
  },
});

export default styles;
