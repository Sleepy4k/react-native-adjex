// Import Core Libraries
import { useState, useCallback } from 'react';
import { useRoute } from '@react-navigation/native';
import { View, ScrollView, RefreshControl, SafeAreaView } from 'react-native';

// Import Styles
import styles from './styles';

// Import Helpers
import { Wait } from '../../helpers';

export default function AuthLayout({ navigation, children }) {
  const route = useRoute().name;
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    Wait(2000)
      .then(() => setRefreshing(false))
      .finally(() => navigation.replace('Tab', { screen: route }));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}
