import styles from "./styles";
import * as React from "react";
import { api } from "@services";
import PropTypes from "prop-types";
import { MainLayout } from "@layouts";
import { BottomTab } from "@components";
import { notification } from "@helpers";
import { Text, View, Image, TouchableOpacity } from "react-native";

const About = ({ navigation }) => {
  const [team, setTeam] = React.useState({});

  React.useEffect(() => {
    const initTeam = async () => {
      try {
        const response = await api.get("/team");

        if (response.data.status === 200) {
          setTeam(response.data.data);
        } else {
          notification("Something went wrong", "error");
          console.log(response.message);
        }
      } catch (error) {
        notification("Server cannot be reached", "error");
        console.log(error.message);
      }
    };

    initTeam();
  }, []);

  return (
    <MainLayout navigation={navigation}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("@images/logo.png")} />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image
              style={styles.back_icon}
              source={require("@images/back-white-icon.png")}
            />
          </TouchableOpacity>
          <Text style={styles.title}>{"ABOUT US"}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.sub_title}>{"About"}</Text>
          <Text style={styles.paragraph}>
            {
              "We are a service provider engaged in the field of education, by making this application, hopefully it can be useful to be able to learn adjectives anywhere and anytime"
            }
          </Text>
          <Text style={styles.sub_title}>{"Team"}</Text>
          <Text style={styles.paragraph}>
            {
              "In making this application, the hard work of our team, which consists of :"
            }
          </Text>
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
