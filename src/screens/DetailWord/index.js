import styles from "./styles";
import * as React from "react";
import { api } from "@services";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { BottomTab } from "@components";
import { notification } from "@helpers";
import { useTranslation } from "react-i18next";
import { Text, View, Image, TouchableOpacity } from "react-native";

const DetailWord = ({ route, navigation }) => {
  const { t } = useTranslation();
  const { id, word } = route.params.param;
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const initData = async () => {
      try {
        const response = await api.get(`/adjective/${id}`);

        if (response.data.status == "success") {
          setData(response.data.data);
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

    initData();
  }, []);

  return (
    <MainLayout
      navigation={navigation}
      loading={loading}
      refresh={false}
      style={null}
    >
      <View style={styles.container}>
        <Image style={styles.logo} source={require("@images/logo.png")} />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
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
            {word}
          </Text>
        </View>
        <View style={styles.card}>
          {data && data.description == null && (
            <>
              <Text
                style={{
                  fontSize: 20,
                  marginLeft: 20,
                  marginTop: 30,
                  fontWeight: "bold",
                }}
              >
                {t("detail_word.error")}
              </Text>
              <Text style={{ color: "black", margin: 10, padding: 10 }}>
                {t("detail_word.error_text")}
              </Text>
            </>
          )}
          {data && data.description && (
            <Text
              style={{
                fontSize: 20,
                marginLeft: 20,
                marginTop: 30,
                fontWeight: "bold",
              }}
            >
              {t("detail_word.description")}
            </Text>
          )}
          <Text style={{ color: "black", margin: 10, padding: 10 }}>
            {data && data.description}
          </Text>
          {data && data.example && (
            <>
              <Text
                style={{
                  fontSize: 20,
                  marginLeft: 20,
                  marginTop: 30,
                  fontWeight: "bold",
                }}
              >
                {t("detail_word.example")}
              </Text>
              <Text style={{ color: "black", margin: 10, padding: 10 }}>
                {`${t("detail_word.example_text")} ${word} : `}
              </Text>
            </>
          )}
          <Text style={{ color: "black", marginLeft: 20 }}>
            {data && data.example}
          </Text>
        </View>
        <BottomTab navigation={navigation} />
      </View>
    </MainLayout>
  );
};

DetailWord.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

DetailWord.defaultProps = {
  route: {
    params: {
      param: {
        word: "",
      },
    },
  },
  navigation: {
    navigate: () => {},
  },
};

export default DetailWord;

// Path: src\screens\DetailWord\index.js
