// Import Core Libraries
import { NavigationContainer } from "@react-navigation/native";

// Import Navigation
import { RootNav } from "./src/navigations";

// Import Components
import { CustomStatusBar } from "./src/components";

const App = () => {
  return (
    <NavigationContainer>
      <CustomStatusBar />
      <RootNav />
    </NavigationContainer>
  );
};

export default App;
