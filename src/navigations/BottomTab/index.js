import styles from "./styles";
import { Icon } from "@components";
import { Search, Profile, Dashboard } from "@screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={"Dashboard"}
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
        tabBarStyle: { backgroundColor: "#1C3144" },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ color, size }) => (
            <Icon
              disabled
              size={size}
              name={"home"}
              color={color}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <Icon
              size={size}
              name={"search-web"}
              color={color}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Icon
              size={size}
              name={"account"}
              color={color}
              style={styles.icon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

// Path: src\navigations\BottomTab\index.js
