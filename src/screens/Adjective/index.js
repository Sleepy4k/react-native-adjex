import styles from "./styles";
import * as React from "react";
import { api } from "@services";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { BottomTab } from "@components";
import { notification } from "@helpers";
import { useTranslation } from "react-i18next";
import { AuthContext } from "@context/AuthContext";
import { Text, View, Image, Alert, TouchableOpacity } from "react-native";

const Adjective = ({ navigation }) => {
  const { t } = useTranslation();
  const [data, setData] = React.useState([]);
  const { token } = React.useContext(AuthContext);
  const [loading, setLoading] = React.useState(true);
  const [disabled, setDisabled] = React.useState(false);

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

  const handleDelete = async (id) => {
    setLoading(true);

    try {
      const response = await api.delete(`/adjective/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.status == "success") {
        notification(
          t("axios.success", {
            action: t("adjective.deleted", { id: id }),
          }),
          t("axios.title", { context: "success" })
        );
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
      setDisabled(false);
      navigation.replace("Adjective");
    }
  };

  const handleConfirmation = (id) => {
    setDisabled(true);

    try {
      Alert.alert("Are you sure?", "Data will be deleted permanently", [
        {
          text: "Delete",
          onPress: () => handleDelete(id),
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ]);
    } catch (error) {
      notification(t("axios.unknown"), t("axios.title", { context: "error" }));
      setDisabled(false);
      console.log(error.message);
    }
  };

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
            {t("adjective.title")}
          </Text>
          <TouchableOpacity
            disabled={disabled}
            onPress={() => navigation.navigate("AddWord")}
            style={{
              width: 65,
              height: 25,
              borderRadius: 5,
              marginLeft: 45,
              backgroundColor: "#FAC952",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                marginLeft: 3,
                marginTop: 2,
              }}
            >
              {t("adjective.add")}
            </Text>
          </TouchableOpacity>
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
                      {item.name.length < 5
                        ? item.name
                        : item.name.substring(0, 5) + "..."}
                    </Text>
                    <TouchableOpacity
                      disabled={disabled}
                      onPress={() =>
                        navigation.navigate("EditWord", {
                          param: { id: item.id },
                        })
                      }
                      style={{
                        marginTop: 15,
                        height: 25,
                        width: 45,
                        borderRadius: 5,
                        marginLeft: 70,
                        backgroundColor: "lightgrey",
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          marginLeft: 4,
                          marginTop: 2,
                          textAlign: "center",
                        }}
                      >
                        {t("adjective.edit")}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      disabled={disabled}
                      onPress={() => handleConfirmation(item.id)}
                      style={{
                        marginTop: 15,
                        width: 55,
                        height: 25,
                        borderRadius: 5,
                        marginLeft: 15,
                        backgroundColor: "red",
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          marginLeft: 3,
                          marginTop: 2,
                          textAlign: "center",
                        }}
                      >
                        {t("adjective.delete")}
                      </Text>
                    </TouchableOpacity>
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

Adjective.propTypes = {
  navigation: PropTypes.object.isRequired,
};

Adjective.defaultProps = {
  navigation: {
    navigate: () => {},
  },
};

export default Adjective;

// Path: src\screens\Adjective\index.js
