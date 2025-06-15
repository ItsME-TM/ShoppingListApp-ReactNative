import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { theme } from "../../theme";
import { registerForPushNotificationsAsync } from "../../utils/registerForPushNotificationsAsync";
import * as Device from "expo-device";
import * as Notification from "expo-notifications";

export default function CounterScreen() {
  const scheduleNotification = async () => {
    const result = await registerForPushNotificationsAsync();
    console.log("Notification permission result:", result);
    if (result === "granted") {
      await Notification.scheduleNotificationAsync({
        content: {
          title: "Notification from you mobile",
        },
        trigger: {
          type: "timeInterval",
          seconds: 5,
        },
      });
    } else {
      if (Device.isDevice) {
        Alert.alert(
          "Unable to get notification permission",
          "Please enable notifications in your device settings.",
        );
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={scheduleNotification}
      >
        <Text style={styles.buttonText}>Schedule Notification</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: theme.colorBlack,
    padding: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
