// Import Core Libraries
import PropTypes from "prop-types";
import { ScrollView } from "react-native";

const Content = ({ style, enableScroll, refreshControl, children }) => {
  return (
    <ScrollView
      style={style}
      refreshControl={refreshControl}
      showsVerticalScrollIndicator={enableScroll}
    >
      {children}
    </ScrollView>
  );
};

Content.propTypes = {
  style: PropTypes.object,
  enableScroll: PropTypes.bool,
  refreshControl: PropTypes.object,
  children: PropTypes.node.isRequired,
};

Content.defaultProps = {
  enableScroll: false,
  refreshControl: null,
};

export default Content;
