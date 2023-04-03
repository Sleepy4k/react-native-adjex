import * as React from "react";
import { wait } from "@helpers";
import PropTypes from "prop-types";
import { View, ScrollView, SafeAreaView, RefreshControl } from "react-native";

const MainLayout = ({ children }) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView>
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
  children: PropTypes.node.isRequired,
};

MainLayout.defaultProps = {
  children: <View />,
};

export default MainLayout;
