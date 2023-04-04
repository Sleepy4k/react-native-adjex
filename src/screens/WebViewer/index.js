import * as React from "react";
import PropTypes from "prop-types";
import { WebView } from "react-native-webview";

const WebViewer = ({ route, navigation }) => {
  const { url } = route.params.param;

  return <WebView javaScriptEnabled={true} source={{ uri: url }} />;
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
