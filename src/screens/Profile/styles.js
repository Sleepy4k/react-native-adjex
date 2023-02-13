// Import Core Libraries
import { StyleSheet } from 'react-native';

// Import Consts
import { Colors } from '../../constant';

// Import Helpers
import { Responsive } from '../../helpers';

const styles = StyleSheet.create({
  profileScreen: {
    width: '100%',
    backgroundColor: Colors.white,
    height: Responsive.vertical(800),
  },
  bannerPosition: {
    width: '100%',
    position: 'absolute',
    top: Responsive.vertical(17),
    bottom: Responsive.vertical(20),
    height: Responsive.vertical(100),
    backgroundColor: Colors.lightDeepBlue,
  },
  user: {
    top: Responsive.vertical(130),
    height: Responsive.vertical(114),
  },
  body: {
    top: Responsive.vertical(251),
    height: Responsive.vertical(800),
  },
  bodyPosition: {
    width: '100%',
    position: 'absolute',
    left: Responsive.horizontal(0),
  },
  userProfile: {
    position: 'absolute',
    top: Responsive.vertical(19),
    height: Responsive.vertical(75),
    left: Responsive.horizontal(27),
    width: Responsive.horizontal(59),
    borderRadius: Responsive.moderate(50),
  },
  username: {
    fontWeight: 'bold',
    color: Colors.black,
    top: Responsive.vertical(15),
    left: Responsive.horizontal(116),
    fontSize: Responsive.moderate(20),
  },
  usernamePosition: {
    textAlign: 'left',
    position: 'absolute',
    left: Responsive.horizontal(116),
  },
  surename: {
    width: '100%',
    color: '#656161',
    top: Responsive.vertical(55),
    height: Responsive.vertical(35),
    fontSize: Responsive.moderate(18),
  },
  account: {
    width: '100%',
    position: 'absolute',
    top: Responsive.vertical(0),
    left: Responsive.horizontal(0),
    height: Responsive.vertical(302),
  },
  akun: {
    top: Responsive.vertical(18),
  },
  akunTypo: {
    width: '100%',
    textAlign: 'left',
    color: Colors.black,
    position: 'absolute',
    left: Responsive.horizontal(27),
    height: Responsive.vertical(20),
    fontSize: Responsive.moderate(17),
    lineHeight: Responsive.vertical(20),
  },
  cardLayout: {
    width: '75%',
    position: 'absolute',
    height: Responsive.vertical(50),
  },
  card5: {
    top: Responsive.vertical(57),
  },
  cardBg: {
    width: '75%',
    backgroundColor: Colors.yellow,
    left: Responsive.horizontal(27),
  },
  tentangKami: {
    width: '100%',
    textAlign: 'left',
    color: Colors.black,
    position: 'absolute',
    top: Responsive.vertical(17),
    left: Responsive.horizontal(17),
    height: Responsive.vertical(15),
    fontSize: Responsive.moderate(12),
    lineHeight: Responsive.vertical(15),
  },
  arrowIcon: {
    position: 'absolute',
    top: Responsive.vertical(12),
    left: Responsive.horizontal(250),
    width: Responsive.horizontal(30),
    height: Responsive.vertical(30),
  },
  card10: {
    top: Responsive.vertical(133),
  },
  card11: {
    top: Responsive.vertical(209),
    left: Responsive.horizontal(30),
    backgroundColor: 'rgba(220, 48, 48, 0.73)',
  },
  system: {
    top: Responsive.vertical(302),
    height: Responsive.vertical(301),
  },
  system1: {
    top: Responsive.vertical(3),
  },
  card13: {
    top: Responsive.vertical(120),
  },
  card12: {
    top: Responsive.vertical(45),
  },
});

export default styles;
