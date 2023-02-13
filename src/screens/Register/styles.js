// Import Core Libraries
import { StyleSheet } from 'react-native';

// Import Consts
import { Colors } from '../../constant';

// Import Helpers
import { Responsive } from '../../helpers';

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: Colors.black,
    fontSize: Responsive.moderate(40),
  },
  subTitle: {
    color: Colors.grey,
    fontSize: Responsive.moderate(18),
    marginVertical: Responsive.vertical(10),
  },
  content: {
    marginVertical: Responsive.vertical(20),
  },
  navigateLink: {
    fontWeight: '700',
    color: Colors.purple,
  },
  login: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default styles;
