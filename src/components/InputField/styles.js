// Import Core Libraries
import { StyleSheet } from 'react-native';

// Import Consts
import { Colors } from '../../constant';

// Import Helpers
import { Responsive } from '../../helpers';

const styles = StyleSheet.create({
  container: {
    marginBottom: Responsive.vertical(20),
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.light,
    height: Responsive.vertical(55),
    borderWidth: Responsive.horizontal(0.5),
    paddingHorizontal: Responsive.horizontal(15),
  },
  inputText: {
    flex: 1,
    color: Colors.grey,
  },
  inputLabel: {
    color: Colors.grey,
    fontSize: Responsive.moderate(14),
    marginVertical: Responsive.vertical(5),
  },
  inputIcon: {
    fontSize: Responsive.moderate(22),
    marginRight: Responsive.horizontal(10),
  },
  inputPasswordIcon: {
    fontSize: Responsive.moderate(22),
  },
  inputError: {
    color: Colors.red,
    fontSize: Responsive.moderate(12),
    marginTop: Responsive.vertical(7),
  },
});

export default styles;
