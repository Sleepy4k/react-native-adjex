import styles from "./styles";
import * as React from "react";
import { api } from "@services";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { BottomTab } from "@components";
import { notification } from "@helpers";
import { Text, View, Image, TouchableOpacity } from "react-native";

const Tutorial = ({ navigation }) => {
  const [tutorial, setTutorial] = React.useState({});

  React.useEffect(() => {
    const initTutorial = async () => {
      try {
        const response = await api.get("/tutorial");

        if (response.data.status == "success") {
          setTutorial(response.data.data);
        } else {
          notification("Something went wrong", "error");
          console.log(response.message);
        }
      } catch (error) {
        notification("Server cannot be reached", "error");
        console.log(error.message);
      }
    };

    initTutorial();
  }, []);

  return (
    <MainLayout navigation={navigation}>
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
            {"Tutorial"}
          </Text>
          <Text
            style={{
              fontSize: 17,
              marginTop: 10,
              marginLeft: 10,
              fontWeight: "bold",
              color: "white",
            }}
          >
            {"Video"}
          </Text>
        </View>
        <View style={styles.card}>
          {tutorial && tutorial.length > 0
            ? tutorial.map((item, index) => (
                <View style={styles.card1} key={index}>
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("WebViewer", {
                          param: {
                            url: tutorial.url,
                          },
                        })
                      }
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
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 17,
                        marginTop: 20,
                        marginLeft: 20,
                        fontWeight: "bold",
                      }}
                    >
                      {tutorial.name}
                    </Text>
                  </View>
                </View>
              ))
            : null}

          {/* <View style={styles.card1}>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("WebViewer", {
                    param: {
                      url: "https://www.youtube.com/embed/24clNOs1Q9c",
                    },
                  })
                }
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
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 17,
                  marginTop: 20,
                  marginLeft: 20,
                  fontWeight: "bold",
                }}
              >
                {"Understanding"}
              </Text>
            </View>
          </View>
          <View style={styles.card1}>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("WebViewer", {
                    param: {
                      url: "https://www.youtube.com/embed/5KTXCGVBrR4",
                    },
                  })
                }
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
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 17,
                  marginTop: 20,
                  marginLeft: 20,
                  fontWeight: "bold",
                }}
              >
                {"Usage"}
              </Text>
            </View>
          </View>
          <View style={styles.card1}>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("WebViewer", {
                    param: {
                      url: "https://www.youtube.com/embed/1tSJ1k2G4ik",
                    },
                  })
                }
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
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 17,
                  marginTop: 20,
                  marginLeft: 20,
                  fontWeight: "bold",
                }}
              >
                {"Word Example"}
              </Text>
            </View>
          </View> */}
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
