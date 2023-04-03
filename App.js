import { MainStack } from "@navigations";
import { CustomStatusBar } from "@components";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NavigationContainer>
      <CustomStatusBar barStyle="auto" />
      <MainStack />
    </NavigationContainer>
  );
};

export default App;

// Path: App.js
