import { useFonts } from "expo-font";
import { useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Home,
  Quiz,
  Alert,
  Login,
  About,
  Report,
  Search,
  AddWord,
  Profile,
  EditWord,
  ShowQuiz,
  Language,
  Tutorial,
  Register,
  Category,
  Congrats,
  Question,
  Adjective,
  WebViewer,
  Dashboard,
  DetailWord,
  Certificate,
  SearchResult,
} from "@screens";

const MainStack = () => {
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
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
    };

    const getInitialRouteName = async () => {
      try {
        const authUser = await AsyncStorage.getItem("authUser");

        if (authUser) {
          const auth = JSON.parse(authUser);

          if (auth.token) {
            setInitialRouteName("Dashboard");
          } else {
            setInitialRouteName("Login");
          }
        } else {
          setInitialRouteName("Dashboard");
        }
      } catch (error) {
        console.log(error.message);
        setInitialRouteName("Dashboard");
      }
    };

    prepare();
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
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="Alert" component={Alert} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Report" component={Report} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="AddWord" component={AddWord} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditWord" component={EditWord} />
      <Stack.Screen name="ShowQuiz" component={ShowQuiz} />
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name="Tutorial" component={Tutorial} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Congrats" component={Congrats} />
      <Stack.Screen name="Question" component={Question} />
      <Stack.Screen name="Adjective" component={Adjective} />
      <Stack.Screen name="WebViewer" component={WebViewer} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="DetailWord" component={DetailWord} />
      <Stack.Screen name="Certificate" component={Certificate} />
      <Stack.Screen name="SearchResult" component={SearchResult} />
    </Stack.Navigator>
  );
};

export default MainStack;

// Path: src\navigations\MainStack\index.js
