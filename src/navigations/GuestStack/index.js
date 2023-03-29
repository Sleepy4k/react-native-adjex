import { createStackNavigator } from "@react-navigation/stack";
import {
  Home,
  Quiz,
  Login,
  Register,
  Tutorial,
  Certificate,
  SearchResult,
} from "@screens";

const GuestStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={"Login"}
      screenOptions={{ headerShown: true, animationEnabled: true }}
    >
      <Stack.Screen name={"Home"} component={Home} />
      <Stack.Screen name={"Quiz"} component={Quiz} />
      <Stack.Screen name={"Login"} component={Login} />
      <Stack.Screen name={"Register"} component={Register} />
      <Stack.Screen name={"Tutorial"} component={Tutorial} />
      <Stack.Screen name={"Certificate"} component={Certificate} />
      <Stack.Screen name={"SearchResult"} component={SearchResult} />
    </Stack.Navigator>
  );
};

export default GuestStack;

// Path: src\navigations\GuestStack\index.js
