import { MainStack } from "@navigations";
import { CustomStatusBar } from "@components";
import { AuthProvider } from "@context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <AuthProvider>
      <CustomStatusBar barStyle="auto" />
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;

// Path: App.js
