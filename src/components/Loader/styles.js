// Import Core Libraries
import { StyleSheet } from 'react-native';

// Import Consts
import { Colors } from '../../constant';

// Import Helpers
import { Responsive } from '../../helpers';

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    position: 'absolute',
    justifyContent: 'center',
  },
  loaderContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.white,
    height: Responsive.vertical(70),
    borderRadius: Responsive.moderate(5),
    marginHorizontal: Responsive.horizontal(50),
    paddingHorizontal: Responsive.horizontal(20),
  },
  loaderText: {
    fontSize: Responsive.moderate(16),
    marginLeft: Responsive.horizontal(10),
  },
});

export default styles;
