// Import Core Libraries
import { StyleSheet } from 'react-native';

// Import Consts
import { Colors } from '../../constant';

// Import Helpers
import { Responsive } from '../../helpers';

const styles = StyleSheet.create({
  dashboard: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: Colors.white,
    top: Responsive.vertical(178),
    fontSize: Responsive.moderate(35),
  },
  dasboardScreen: {
    width: '100%',
    height: Responsive.vertical(700),
    backgroundColor: Colors.lightDeepBlue,
  },  
  dasboardScreenChild: {
    width: '100%',
    position: 'absolute',
    top: Responsive.vertical(240),
    left: Responsive.horizontal(0),
    height: Responsive.vertical(700),
  },
  dashboardPosition: {
    position: 'absolute',
    left: Responsive.horizontal(15),
  },
  rectangleParent: {
    width: '100%',
    top: Responsive.vertical(271),
    height: Responsive.vertical(100),
  },
  rectangleIcon: {
    top: Responsive.vertical(-15),
  },
  groupLayout: {
    width: '45%',
    position: 'absolute',
    left: Responsive.horizontal(-8),
    height: Responsive.vertical(194),
    borderRadius: Responsive.moderate(15),
  },
  groupChildLayout: {
    width: '45%',
    position: 'absolute',
    left: Responsive.horizontal(181),
    height: Responsive.vertical(194),
    borderRadius: Responsive.moderate(15),
  },
  banner: {
    top: Responsive.vertical(16),
  },
  bannerLayout: {
    width: '100%',
    position: 'absolute',
    height: Responsive.vertical(137),
  },
  adjexBanner: {
    top: Responsive.vertical(0),
  },
  groupTop: {
    top: Responsive.vertical(-15),
  },
  groupItem: {
    top: Responsive.vertical(192),
  },
  groupInner: {
    top: Responsive.vertical(193),
  },
  groupChild: {
    top: Responsive.vertical(400),
  },
});

export default styles;
