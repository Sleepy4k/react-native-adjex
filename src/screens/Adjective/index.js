import styles from "./styles";
import * as React from "react";
import { api } from "@services";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { BottomTab } from "@components";
import { notification } from "@helpers";
import { Text, View, Image, Alert, TouchableOpacity } from "react-native";

const Adjective = ({ navigation }) => {
  const [data, setData] = React.useState([]);

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
      }
    };

    initData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await api.delete(`/adjective/${id}`);

      if (response.data.status == "success") {
        notification("Successfully deleted", "success");
        setData(response.data.data);
      } else {
        notification("Something went wrong", "error");
        console.log(response.message);
      }
    } catch (error) {
      notification("Something went wrong", "error");
      console.log(error.message);
    }
  };

  const handleConfirmation = (id) => {
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
      notification("Something went wrong", "error");
      console.log(error.message);
    }
  };

  return (
    <MainLayout navigation={navigation}>
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
            {"ADMIN"}
          </Text>
          <TouchableOpacity
            style={{
              width: 40,
              height: 25,
              borderRadius: 5,
              marginLeft: 60,
              backgroundColor: "#FAC952",
            }}
            onPress={() => navigation.navigate("AddWord")}
          >
            <Text style={{ fontWeight: "bold", marginLeft: 5, marginTop: 2 }}>
              {"Add"}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View>
            {data && data.length > 0
              ? data.map((item, index) => (
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
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate("EditWord", {
                            param: { letter: item.name },
                          })
                        }
                        style={{
                          marginTop: 15,
                          width: 40,
                          height: 25,
                          borderRadius: 5,
                          marginLeft: 70,
                          backgroundColor: "lightgrey",
                        }}
                      >
                        <Text
                          style={{
                            fontWeight: "bold",
                            marginLeft: 7,
                            marginTop: 2,
                          }}
                        >
                          {"Edit"}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
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
                          }}
                        >
                          {"Delete"}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))
              : null}
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
