import { GuestStack } from "@navigations";
import { CustomStatusBar } from "@components";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NavigationContainer>
      <CustomStatusBar barStyle="auto" />
      <GuestStack />
    </NavigationContainer>
  );
};

export default App;

// Path: App.js
