// Import Core Libraries
import { StyleSheet } from "react-native";

// Import Consts
import { Colors } from "../../constant";

// Import Helpers
import { Responsive } from "../../helpers";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white,
  },
  content: {
    flex: 1,
    width: "100%",
    paddingTop: Responsive.vertical(24),
    borderTopLeftRadius: Responsive.vertical(24),
    borderTopRightRadius: Responsive.vertical(24),
  },
  children: {
    paddingTop: Responsive.vertical(50),
    paddingHorizontal: Responsive.horizontal(20),
  },
});

export default styles;
