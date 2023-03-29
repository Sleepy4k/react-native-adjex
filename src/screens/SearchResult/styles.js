import { responsive } from "@helpers";
import { StyleSheet } from "react-native";
import { fonts, colors, fontsize } from "@constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    backgroundColor: colors.yellow,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
  description: {
    fontSize: 8,
  },
});

export default styles;

// Path: src\screens\SearchResult\styles.js
