import styles from "./styles";
import * as React from "react";
import { api } from "@services";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { useTranslation } from "react-i18next";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  const { t } = useTranslation();
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const initData = async () => {
      try {
        const response = await api.get("/adjective");

        if (response.data.status == "success") {
          setData(response.data.data);
        } else {
          console.log(response.message);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    initData();
  }, []);

  return (
    <MainLayout navigation={navigation} loading={loading} style={null}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("@images/logo.png")} />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
            <Image
              style={{ width: 25, height: 25, marginLeft: -10, marginTop: 10 }}
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
            {t("home.title")}
          </Text>
        </View>
        <View style={styles.card}>
          <ScrollView style={styles.container}>
            {data && data.length > 0
              ? data.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      navigation.navigate("DetailWord", {
                        param: { id: item.id, word: item.name },
                      })
                    }
                  >
                    <View style={styles.card1}>
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          style={{
                            width: 45,
                            height: 45,
                            marginLeft: 10,
                            marginTop: 1 / 2,
                          }}
                          source={require("@images/book-icon.png")}
                        />
                        <Text
                          style={{
                            fontSize: 17,
                            marginTop: 10,
                            marginLeft: 20,
                            fontWeight: "bold",
                          }}
                        >
                          {item.name}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))
              : null}
          </ScrollView>
        </View>
      </View>
    </MainLayout>
  );
};

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

Home.defaultProps = {
  navigation: {
    navigate: () => {},
  },
};

export default Home;

// Path: src\screens\Home\index.js
