import { StyleSheet } from "react-native";
import { border, margin, colors, padding, fontsize } from "@constants";

const styles = StyleSheet.create({
  container: {
    padding: 35,
    backgroundColor: colors.lightDeepBlue,
  },
  logo: {
    width: 270,
    height: 90,
    alignSelf: "center",
    marginBottom: margin.mg_sm,
    borderRadius: border.br_xs,
  },
  header: {
    flexDirection: "row",
  },
  back_icon: {
    width: 20,
    height: 20,
    marginLeft: margin.mg_rlg,
    marginBottom: margin.mg_sm,
  },
  title: {
    color: colors.white,
    fontSize: fontsize.size_lg,
    fontWeight: "bold",
    marginLeft: margin.mg_lg,
  },
  card: {
    width: 300,
    height: 500,
    marginTop: margin.mg_sm,
    alignSelf: "center",
    borderRadius: border.br_sm,
    backgroundColor: colors.white,
  },
  sub_title: {
    fontSize: fontsize.size_2xl,
    marginLeft: margin.mg_lg,
    marginTop: margin.mg_2xl,
    fontWeight: "bold",
  },
  paragraph: {
    color: colors.black,
    margin: margin.mg_sm,
    padding: padding.pd_sm,
  },
  list: {
    color: colors.black,
    marginLeft: margin.mg_lg,
  },
});

export default styles;

// Path: src\screens\About\styles.js
