import styles from "./styles";
import * as React from "react";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { BottomTab } from "@components";
import { Text, View, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Certificate = ({ navigation }) => {
  const [data, setData] = React.useState(0);

  React.useEffect(() => {
    const initData = async () => {
      const certificate = await AsyncStorage.getItem("certificate");

      if (certificate) {
        const { total } = JSON.parse(certificate);

        setData(total);
      } else {
        setData(0);
      }
    };

    initData();
  }, []);

  const renderCertificate = () => {
    let certificate = [];

    for (let index = 0; index < data; index++) {
      certificate.push(
        <TouchableOpacity key={index}>
          <Image
            style={{
              width: 120,
              height: 80,
              marginTop: 20,
              marginLeft: 20,
            }}
            source={require("@images/certificate.png")}
          />
        </TouchableOpacity>
      );
    }

    return certificate;
  };

  return (
    <MainLayout navigation={navigation}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("@images/logo.jpg")} />
        <View style={styles.tombol}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
              <Image
                style={{ width: 25, height: 25, marginLeft: 10, marginTop: 20 }}
                source={require("@images/back-black-icon.png")}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 17,
                marginTop: 20,
                marginLeft: 70,
                color: "black",
                fontWeight: "bold",
              }}
            >
              {"Certificate"}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            {renderCertificate()}
          </View>
        </View>
        <BottomTab navigation={navigation} />
      </View>
    </MainLayout>
  );
};

Certificate.propTypes = {
  navigation: PropTypes.object.isRequired,
};

Certificate.defaultProps = {
  navigation: {
    navigate: () => {},
  },
};

export default Certificate;

// Path: src\screens\Certificate\index.js
