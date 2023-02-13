// Import Core Libraries
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// Import Navigation
import { RootNav } from './src/navigations';

const App = () => {
    return (
        <NavigationContainer>
            <StatusBar
                barStyle='light-content'
                backgroundColor='#1a234c'
                translucent
            />
            <RootNav />
        </NavigationContainer>
    );
};

export default App;
