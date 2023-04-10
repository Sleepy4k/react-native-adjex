import styles from "./styles";
import * as React from "react";
import { wait } from "@helpers";
import { i18n } from "@services";
import PropTypes from "prop-types";
import { Loader } from "@components";
import { I18nextProvider } from "react-i18next";
import { useRoute } from "@react-navigation/native";
import { View, ScrollView, SafeAreaView, RefreshControl } from "react-native";

const MainLayout = ({
  navigation,
  scroll,
  loading,
  children,
  style,
  refresh,
}) => {
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
        if (refresh) {
          navigation.replace(route);
        }
      });
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <SafeAreaView style={style ? style : styles.container}>
        {scroll ? (
          <ScrollView
            showsVerticalScrollIndicator={!refreshing}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            {loading && <Loader show={loading} size="large" />}
            {children}
          </ScrollView>
        ) : (
          <>
            {loading && <Loader show={loading} size="large" />}
            {children}
          </>
        )}
      </SafeAreaView>
    </I18nextProvider>
  );
};

MainLayout.propTypes = {
  navigation: PropTypes.object.isRequired,
  scroll: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  refresh: PropTypes.bool,
};

MainLayout.defaultProps = {
  navigation: {
    navigate: () => {},
  },
  scroll: true,
  loading: false,
  children: <View />,
  style: null,
  refresh: true,
};

export default MainLayout;
