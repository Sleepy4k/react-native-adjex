import { responsive } from "@helpers";
import { StyleSheet } from "react-native";
import { fonts, colors, border, fontsize } from "@constants";

const styles = StyleSheet.create({
  groupLayout: {
    height: responsive.vertical(194),
    width: responsive.horizontal(185),
    borderRadius: border.br_mini,
    position: "absolute",
  },
  groupInnerLayout: {
    left: responsive.horizontal(181),
    height: responsive.vertical(194),
    width: responsive.horizontal(185),
    borderRadius: border.br_mini,
    position: "absolute",
  },
  bannerLayout: {
    height: responsive.vertical(137),
    width: "100%",
    position: "absolute",
  },
  quizTypo: {
    color: colors.black,
    fontSize: fontsize.size_xl,
    top: responsive.vertical(697),
    textAlign: "left",
    fontFamily: fonts.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  tutorialTypo: {
    top: responsive.vertical(457),
    color: colors.black,
    fontSize: fontsize.size_xl,
    textAlign: "left",
    fontFamily: fonts.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  dasboardScreenChild: {
    top: responsive.vertical(240),
    width: responsive.horizontal(428),
    height: responsive.horizontal(686),
    left: responsive.horizontal(0),
    position: "absolute",
  },
  dashboard: {
    top: responsive.vertical(178),
    fontSize: fontsize.size_16xl,
    color: colors.white,
    textAlign: "left",
    fontFamily: fonts.interBold,
    fontWeight: "700",
    left: responsive.horizontal(35),
    position: "absolute",
  },
  groupChild: {
    left: responsive.horizontal(-6),
    top: responsive.vertical(-6),
  },
  groupItem: {
    top: responsive.vertical(231),
    left: responsive.horizontal(-8),
  },
  groupInner: {
    top: responsive.vertical(232),
  },
  rectangleIcon: {
    top: responsive.vertical(-6),
  },
  rectangleParent: {
    top: responsive.horizontal(274),
    width: responsive.horizontal(358),
    height: responsive.vertical(416),
    left: responsive.horizontal(35),
    position: "absolute",
  },
  adjexBanner1: {
    top: responsive.vertical(0),
    left: responsive.horizontal(1),
  },
  banner: {
    top: responsive.vertical(16),
    left: responsive.horizontal(-1),
  },
  quiz: {
    left: responsive.horizontal(96),
  },
  certificate: {
    left: responsive.horizontal(259),
  },
  homeScreen: {
    left: responsive.horizontal(58),
  },
  tutorial: {
    left: responsive.horizontal(271),
  },
  dasboardScreen: {
    backgroundColor: colors.lightDeepBlue,
    flex: 1,
    width: "100%",
    height: responsive.vertical(926),
  },
});

export default styles;

// Path: src\screens\Dashboard\styles.js
