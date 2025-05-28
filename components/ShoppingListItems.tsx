import { Alert, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { theme } from "../theme";

type Props = {
  name: string;
  isCompleted?: boolean;
};

export function ShoppingListItems({ name, isCompleted }: Props) {
  const handleDelete = () => {
    Alert.alert(`Wanna delete ${name}?`, "Sure you want to delete this item?", [
      {
        text: "Yes",
        onPress: () => console.log(`Deleting ${name}...`),
        style: "destructive",
      },
      {
        text: "No",
        onPress: () => console.log("Cancelled"),
        style: "cancel",
      },
    ]);
  };

  return (
    <View
      style={[
        styles.iteamContainer,
        isCompleted ? styles.completedContainer : undefined,
      ]}
    >
      <Text
        style={[
          styles.iteamText,
          isCompleted ? styles.completedText : undefined,
        ]}
      >
        {name}
      </Text>
      <TouchableOpacity
        onPress={handleDelete}
        style={[
          styles.button,
          isCompleted ? styles.completedButtton : undefined,
        ]}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  iteamText: {
    fontSize: 18,
    color: "#1a759f",
    fontWeight: "bold",
  },

  completedText: {
    color: theme.colorGrey,
    textDecorationLine: "line-through",
  },

  completedContainer: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorGrey,
  },

  iteamContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colorCerulean,
    paddingHorizontal: 8,
    paddingVertical: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  button: {
    backgroundColor: theme.colorBlack,
    padding: 10,
    borderRadius: 5,
    color: theme.colorWhite,
  },

  completedButtton: {
    backgroundColor: theme.colorGrey,
  },

  buttonText: {
    color: theme.colorWhite,
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 6,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
