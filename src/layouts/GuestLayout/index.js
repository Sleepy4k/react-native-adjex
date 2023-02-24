// Import Core Libraries
import { useState, useCallback } from "react";
import { View, SafeAreaView, RefreshControl } from "react-native";

// Import Styles
import styles from "./styles";

// Import Helpers
import { Wait } from "../../helpers";

// Import Components
import { Content } from "../../components";

export default function GuestLayout({ children }) {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    Wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Content
        style={styles.content}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.children}>{children}</View>
      </Content>
    </SafeAreaView>
  );
}
