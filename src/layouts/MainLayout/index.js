import styles from "./styles";
import * as React from "react";
import { wait } from "@helpers";
import PropTypes from "prop-types";
import { useRoute } from "@react-navigation/native";
import { View, ScrollView, SafeAreaView, RefreshControl } from "react-native";

const MainLayout = ({ navigation, children }) => {
  const route = useRoute().name;
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000)
      .then(() => {
        setRefreshing(false);
      })
      .catch((err) => {
        setRefreshing(false);
        console.log(err);
      })
      .finally(() => {
        navigation.replace(route);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={!refreshing}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

MainLayout.propTypes = {
  navigation: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

MainLayout.defaultProps = {
  navigation: {
    navigate: () => {},
  },
  children: <View />,
};

export default MainLayout;
