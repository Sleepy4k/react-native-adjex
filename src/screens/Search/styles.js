import { responsive } from "@helpers";
import { StyleSheet } from "react-native";
import { fonts, colors, border, fontsize } from "@constants";

const styles = StyleSheet.create({
  searchPosition: {
    width: responsive.horizontal(428),
    left: responsive.horizontal(0),
    position: "absolute",
  },
  searchFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  searchLayout: {
    height: responsive.vertical(68),
    borderRadius: border.br_3xs,
    top: responsive.vertical(25),
    position: "absolute",
  },
  bannerLayout: {
    height: responsive.vertical(137),
    top: responsive.vertical(0),
    width: responsive.horizontal(430),
    position: "absolute",
  },
  bottomNavigationIcon: {
    top: responsive.vertical(871),
    height: responsive.vertical(55),
    width: responsive.horizontal(430),
    left: responsive.horizontal(0),
    position: "absolute",
  },
  background: {
    top: responsive.vertical(6),
    borderRadius: responsive.moderate(60),
    backgroundColor: colors.goldenrod,
    height: responsive.vertical(681),
  },
  searchHistory: {
    top: responsive.vertical(34),
    left: responsive.horizontal(34),
    fontSize: fontsize.size_xl,
    fontWeight: "600",
    fontFamily: fonts.interSemibold,
    color: colors.gray_200,
    width: responsive.horizontal(206),
  },
  adjective: {
    top: responsive.vertical(239),
    height: responsive.vertical(632),
  },
  searchChild: {
    left: responsive.horizontal(312),
    backgroundColor: colors.limegreen,
    width: responsive.horizontal(84),
  },
  searchText: {
    top: responsive.vertical(48),
    left: responsive.horizontal(322),
    fontSize: fontsize.size_lg,
    fontWeight: "800",
    fontFamily: fonts.interExtrabold,
    color: colors.white,
  },
  searchIcon: {
    top: responsive.vertical(46),
    left: responsive.horizontal(54),
    width: responsive.horizontal(25),
    height: responsive.vertical(25),
    opacity: 0.4,
    position: "absolute",
  },
  searchBar: {
    left: responsive.horizontal(28),
    backgroundColor: "rgba(224, 224, 224, 0.15)",
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.4)",
    borderWidth: responsive.moderate(1),
    width: responsive.horizontal(259),
  },
  search: {
    top: responsive.vertical(137),
    height: responsive.vertical(102),
  },
  adjexBanner1: {
    left: responsive.horizontal(2),
  },
  banner: {
    left: responsive.horizontal(-2),
  },
  searchScreen: {
    backgroundColor: colors.ghostwhite,
    flex: 1,
    width: "100%",
    height: responsive.vertical(926),
  },
});

export default styles;

// Path: src\screens\Search\styles.js
