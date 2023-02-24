// Import Core Libraries
import * as SplashScreen from "expo-splash-screen";
import { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Import Navigations
import { BottomTab, GuestStack } from "../index";

// Prevent Auto Hide
SplashScreen.preventAutoHideAsync();

const RootNav = () => {
  const Stack = createStackNavigator();
  const [initialRouteName, setInitialRouteName] = useState("");

  useEffect(() => {
    const authUser = async () => {
      try {
        const guestSearch = await AsyncStorage.getItem("guestSearch");
        const authUser = await AsyncStorage.getItem("authUser");

        if (guestSearch && !authUser) {
          const search = JSON.parse(guestSearch);

          if (search.total > 5) {
            setInitialRouteName("Stack");
          } else {
            setInitialRouteName("Tab");
          }
        } else if (authUser) {
          const auth = JSON.parse(authUser);

          if (auth.token) {
            setInitialRouteName("Tab");
          } else {
            setInitialRouteName("Stack");
          }
        } else {
          setInitialRouteName("Tab");
        }
      } catch (error) {
        console.log(error.message);
        setInitialRouteName("Tab");
      }

      await SplashScreen.hideAsync();
    };

    setTimeout(() => {
      authUser();
    }, 2000);
  }, []);

  if (!initialRouteName) {
    return null;
  }

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{ headerShown: false, animationEnabled: false }}
    >
      <Stack.Screen name={"Tab"} component={BottomTab} />
      <Stack.Screen name={"Stack"} component={GuestStack} />
    </Stack.Navigator>
  );
};

export default RootNav;
