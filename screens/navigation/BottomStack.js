// Import Core Libraries
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from 'react-native-vector-icons';

// Import Pages
import Home from '../Home';
import Search from '../Search';
import Application from '../Application';

const Tab = createBottomTabNavigator();

export default function BottomStack() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false, animationEnabled: true }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="home"
              size={size}
              color={color}
              style={{ marginRight: 5 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="search"
              size={size}
              color={color}
              style={{ marginRight: 5 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Application"
        component={Application}
        options={{
          tabBarLabel: 'Application',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="settings"
              size={size}
              color={color}
              style={{ marginRight: 5 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
