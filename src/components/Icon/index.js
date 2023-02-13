// Import Core Libraries
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Import Styles
import styles from './styles';

// Import Consts
import { Colors } from '../../constant';

const Icon = ({ name, size, color, style, ...props }) => {
  return (
    <MaterialCommunityIcons
      name={name}
      size={size}
      color={color}
      style={style}
      {...props}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
  color: PropTypes.string,
};

Icon.defaultProps = {
  name: 'person',
  style: styles.icon,
  size: 20,
  color: Colors.darkBlue,
};

export default Icon;
