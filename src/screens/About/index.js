import styles from "./styles";
import * as React from "react";
import { api } from "@services";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { BottomTab } from "@components";
import { notification } from "@helpers";
import { useTranslation } from "react-i18next";
import { Text, View, Image, TouchableOpacity } from "react-native";

const About = ({ navigation }) => {
  const { t } = useTranslation();
  const [team, setTeam] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const initTeam = async () => {
      try {
        const response = await api.get("/team");

        if (response.data.status === "success") {
          setTeam(response.data.data);
        } else {
          notification(
            t("axios.unknown"),
            t("axios.title", { context: "error" })
          );
          console.log(response.message);
        }
      } catch (error) {
        notification(t("axios.server"), t("axios.title", { context: "error" }));
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    initTeam();
  }, []);

  return (
    <MainLayout navigation={navigation} loading={loading}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("@images/logo.png")} />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image
              style={styles.back_icon}
              source={require("@images/back-white-icon.png")}
            />
          </TouchableOpacity>
          <Text style={styles.title}>{t("about.title")}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.sub_title}>{t("about.about")}</Text>
          <Text style={styles.paragraph}>{t("about.about_desc")}</Text>
          <Text style={styles.sub_title}>{t("about.team")}</Text>
          <Text style={styles.paragraph}>{t("about.team_desc")}</Text>
          {team && team.length > 0
            ? team.map((item, index) => (
                <Text style={styles.list} key={index}>
                  {`- ${item.name} (${item.nim})`}
                </Text>
              ))
            : null}
        </View>
        <BottomTab navigation={navigation} />
      </View>
    </MainLayout>
  );
};

About.propTypes = {
  navigation: PropTypes.object.isRequired,
};

About.defaultProps = {
  navigation: {
    navigate: () => {},
  },
};

export default About;

// Path: src\screens\About\index.js
