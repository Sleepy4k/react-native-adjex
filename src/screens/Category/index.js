import styles from "./styles";
import * as React from "react";
import { api } from "@services";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { BottomTab } from "@components";
import { useTranslation } from "react-i18next";
import { Text, View, Image, TouchableOpacity } from "react-native";

const Category = ({ navigation }) => {
  const { t } = useTranslation();
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const initData = async () => {
      try {
        const response = await api.get("/category");

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
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image
              style={{
                width: 20,
                height: 20,
                marginLeft: -10,
                marginBottom: 10,
              }}
              source={require("@images/back-white-icon.png")}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 17,
              marginLeft: 70,
              color: "white",
              fontWeight: "bold",
            }}
          >
            {t("category.title")}
          </Text>
        </View>
        <View style={styles.card}>
          <View>
            {data &&
              data.length > 0 &&
              data.map((item, index) => (
                <View
                  key={index}
                  style={{
                    marginTop: 20,
                    backgroundColor: "#1C3144",
                    height: 50,
                    width: 270,
                    borderRadius: 10,
                    alignSelf: "center",
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        fontSize: 17,
                        marginTop: 15,
                        marginLeft: 20,
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      {item.name}
                    </Text>
                  </View>
                </View>
              ))}
          </View>
        </View>
        <BottomTab navigation={navigation} />
      </View>
    </MainLayout>
  );
};

Category.propTypes = {
  navigation: PropTypes.object.isRequired,
};

Category.defaultProps = {
  navigation: {
    navigate: () => {},
  },
};

export default Category;

// Path: src\screens\Category\index.js
