// Import Core Libraries
import { StyleSheet } from 'react-native';

// Import Consts
import { Colors } from '../../constant';

// Import Helpers
import { Responsive } from '../../helpers';

const styles = StyleSheet.create({
  buttonTouchable: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blue,
    height: Responsive.vertical(55),
    marginVertical: Responsive.vertical(20),
  },
  buttonText: {
    fontWeight: 'bold',
    color: Colors.white,
    fontSize: Responsive.moderate(18),
  },
});

export default styles;
