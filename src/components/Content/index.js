// Import Core Libraries
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';

// Import Styles
import styles from './styles';

const Content = ({ style, refreshControl, children }) => {
  return (
    <ScrollView
      style={style}
      refreshControl={refreshControl}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
};

Content.propTypes = {
  style: PropTypes.object,
  refreshControl: PropTypes.object,
  children: PropTypes.node.isRequired,
};

Content.defaultProps = {
  style: styles.container,
};

export default Content;
