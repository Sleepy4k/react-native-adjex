// Import Core Libraries
import { Alert, Platform, ToastAndroid } from "react-native";

const showNotification = (message, title) => {
  switch (Platform.OS) {
    case "android":
      ToastAndroid.showWithGravityAndOffset(
        message,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
      break;
    case "web":
      alert(message);
      break;
    default:
      Alert.alert(title, message);
      break;
  }
};

export default showNotification;
