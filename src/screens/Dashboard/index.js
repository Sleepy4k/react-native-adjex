import styles from "./styles";
import * as React from "react";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { BottomTab } from "@components";
import { useTranslation } from "react-i18next";
import { AuthContext } from "@context/AuthContext";
import { Text, View, Image, TouchableOpacity } from "react-native";

const Dashboard = ({ navigation }) => {
  const { t } = useTranslation();
  const { logged, busy } = React.useContext(AuthContext);

  return (
    <MainLayout navigation={navigation} loading={busy} style={null}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("@images/logo.png")} />
        <Text
          style={{
            color: "white",
            marginTop: 20,
            fontSize: 25,
            fontWeight: "bold",
            marginLeft: 10,
          }}
        >
          {t("dashboard.title")}
        </Text>
        <View style={styles.tombol}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Image
                style={styles.card1}
                source={require("@images/home-screen.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Tutorial")}>
              <Image
                style={styles.card2}
                source={require("@images/tutorial-screen.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ marginLeft: 25 }}>{t("dashboard.home")}</Text>
            <Text style={{ marginLeft: 45 }}>{t("dashboard.tutorial")}</Text>
          </View>
          {logged && (
            <>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => navigation.navigate("Quiz")}>
                  <Image
                    style={styles.card3}
                    source={require("@images/quiz-screen.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Certificate")}
                >
                  <Image
                    style={styles.card4}
                    source={require("@images/certificate-screen.png")}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginLeft: 55 }}>{t("dashboard.quiz")}</Text>
                <Text style={{ marginLeft: 105 }}>
                  {t("dashboard.certificate")}
                </Text>
              </View>
            </>
          )}
        </View>
        <BottomTab navigation={navigation} />
      </View>
    </MainLayout>
  );
};

Dashboard.propTypes = {
  navigation: PropTypes.object.isRequired,
};

Dashboard.defaultProps = {
  navigation: {
    navigate: () => {},
  },
};

export default Dashboard;

// Path: src\screens\Dashboard\index.js
