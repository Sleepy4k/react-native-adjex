import styles from "./styles";
import * as React from "react";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { BottomTab } from "@components";
import { useTranslation } from "react-i18next";
import { Text, View, Image, TouchableOpacity } from "react-native";

const Alert = ({ route, navigation }) => {
  const { t } = useTranslation();
  const { index } = route.params.param;

  return (
    <MainLayout navigation={navigation}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("@images/logo.png")} />
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text
            style={{
              fontSize: 25,
              marginTop: 10,
              fontWeight: "bold",
              color: "red",
            }}
          >
            {t("alert.title")}
          </Text>
        </View>
        <View style={styles.card}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text
              style={{
                fontSize: 15,
                marginTop: 25,
                fontWeight: "bold",
                color: "black",
              }}
            >
              {t("alert.confirmation")}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ShowQuiz", { param: { index: index } })
            }
          >
            <View style={styles.card1}>
              <Text
                style={{
                  fontSize: 20,
                  marginTop: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {t("alert.confirmation_yes")}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Quiz")}>
            <View style={styles.card1}>
              <Text
                style={{
                  fontSize: 20,
                  marginTop: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {t("alert.confirmation_no")}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <BottomTab navigation={navigation} />
      </View>
    </MainLayout>
  );
};

Alert.propTypes = {
  navigation: PropTypes.object.isRequired,
};

Alert.defaultProps = {
  navigation: {
    navigate: () => {},
  },
};

export default Alert;

// Path: src\screens\Alert\index.js
