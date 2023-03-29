import { useFonts } from "expo-font";
import { useState, useEffect } from "react";
import BottomTab from "@navigations/BottomTab";
import GuestStack from "@navigations/GuestStack";
import * as SplashScreen from "expo-splash-screen";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

SplashScreen.preventAutoHideAsync();

const RootNav = () => {
  const Stack = createStackNavigator();
  const [initialRouteName, setInitialRouteName] = useState("");

  const [fontsLoaded] = useFonts({
    Inter_bold: require("@fonts/Inter_bold.ttf"),
    Roboto_bold: require("@fonts/Roboto_bold.ttf"),
    Inter_medium: require("@fonts/Inter_medium.ttf"),
    Inter_regular: require("@fonts/Inter_regular.ttf"),
    Inter_semibold: require("@fonts/Inter_semibold.ttf"),
    Inter_extrabold: require("@fonts/Inter_extrabold.ttf"),
    Montserrat_bold: require("@fonts/Montserrat_bold.ttf"),
    Spacemono_regular: require("@fonts/SpaceMono-Regular.ttf"),
    Montserrat_regular: require("@fonts/Montserrat_regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  useEffect(() => {
    const getInitialRouteName = async () => {
      try {
        const authUser = await AsyncStorage.getItem("authUser");

        if (authUser) {
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
    };

    getInitialRouteName();
  }, []);

  if (!initialRouteName || !fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
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

// Path: src\navigations\RootNav\index.js
