import * as React from "react";
import PropTypes from "prop-types";
import { SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

const WebViewer = ({ route, navigation }) => {
  const { url } = route.params.param;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView javaScriptEnabled={true} source={{ uri: url }} />
    </SafeAreaView>
  );
};

WebViewer.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

WebViewer.defaultProps = {
  route: {
    params: {
      param: {
        url: "",
      },
    },
  },
  navigation: {
    navigate: () => {},
  },
};

export default WebViewer;

// Path: src\screens\WebViewer\index.js
