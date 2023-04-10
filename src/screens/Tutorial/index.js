import styles from "./styles";
import * as React from "react";
import { api } from "@services";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { notification } from "@helpers";
import { BottomTab } from "@components";
import { useTranslation } from "react-i18next";
import { Text, View, Image, TouchableOpacity } from "react-native";

const Tutorial = ({ navigation }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = React.useState(true);
  const [tutorial, setTutorial] = React.useState({});

  React.useEffect(() => {
    const initTutorial = async () => {
      try {
        const response = await api.get("/tutorial");

        if (response.data.status == "success") {
          setTutorial(response.data.data);
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

    initTutorial();
  }, []);

  return (
    <MainLayout navigation={navigation} loading={loading} style={null}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("@images/logo.png")} />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
            <Image
              style={{
                width: 25,
                height: 25,
                marginLeft: -10,
                marginTop: 10,
              }}
              source={require("@images/back-white-icon.png")}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 17,
              marginTop: 10,
              marginLeft: 50,
              fontWeight: "bold",
              color: "white",
            }}
          >
            {t("tutorial.title")}
          </Text>
        </View>
        <View style={styles.card}>
          {tutorial && tutorial.length > 0
            ? tutorial.map((item, index) => (
                <View style={styles.card1} key={index}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("WebViewer", {
                        param: {
                          url: item.url,
                        },
                      })
                    }
                  >
                    <View style={{ flexDirection: "row" }}>
                      <View
                        style={{
                          width: 45,
                          height: 45,
                          backgroundColor: "darkblue",
                          marginTop: 12,
                          marginLeft: 10,
                          borderRadius: 5,
                        }}
                      >
                        <Image
                          style={{
                            width: 25,
                            height: 25,
                            marginLeft: 12,
                            marginTop: 10,
                          }}
                          source={require("@images/play-icon.png")}
                        />
                      </View>

                      <Text
                        style={{
                          fontSize: 17,
                          marginTop: 20,
                          marginLeft: 20,
                          fontWeight: "bold",
                        }}
                      >
                        {item.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              ))
            : null}
        </View>
        <BottomTab navigation={navigation} />
      </View>
    </MainLayout>
  );
};

Tutorial.propTypes = {
  navigation: PropTypes.object.isRequired,
};

Tutorial.defaultProps = {
  navigation: {
    navigate: () => {},
  },
};

export default Tutorial;

// Path: src\screens\Tutorial\index.js
