// Import Core Libraries
import { StyleSheet } from 'react-native';

// Import Consts
import { Colors } from '../../constant';

// Import Helpers
import { Responsive } from '../../helpers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.brown,
    paddingTop: Responsive.vertical(24),
    borderTopLeftRadius: Responsive.vertical(24),
    borderTopRightRadius: Responsive.vertical(24),
  },
});

export default styles;
