// Import Core Libraries
import { View } from 'react-native';
import { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import Styles
import styles from './styles';

// Import Components
import { Loader } from '../../components';

// Import Navigations
import { BottomTab, GuestStack } from '../index';

const RootNav = () => {
  const Stack = createStackNavigator();
  const [initialRouteName, setInitialRouteName] = useState('');

  useEffect(() => {
    const authUser = async () => {
      try {
        const guestSearch = await AsyncStorage.getItem('guestSearch');
        const authUser = await AsyncStorage.getItem('authUser');

        if (guestSearch && !authUser) {
          const search = JSON.parse(guestSearch);

          if (search.total > 5) {
            setInitialRouteName('Stack');
          } else {
            setInitialRouteName('Tab');
          }
        } else if (authUser) {
          const auth = JSON.parse(authUser);

          if (auth.token) {
            setInitialRouteName('Tab');
          } else {
            setInitialRouteName('Stack');
          }
        } else {
          setInitialRouteName('Tab');
        }
      } catch (error) {
        console.log(error.message);
        setInitialRouteName('Tab');
      }
    };

    setTimeout(() => {
      authUser();
    }, 2000);
  }, []);

  return !initialRouteName ? (
    <View style={styles.loader}>
      <Loader visible={true} text={'Memuat Aplikasi...'} />
    </View>
  ) : (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{ headerShown: false, animationEnabled: false }}>
      <Stack.Screen name={'Tab'} component={BottomTab} />
      <Stack.Screen name={'Stack'} component={GuestStack} />
    </Stack.Navigator>
  );
};

export default RootNav;
