import { Alert, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { theam } from "../theam";

type Props = {
  name: string;
};

export function ShoppingListItems({ name }: Props) {
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
    <View style={styles.container}>
      <View style={styles.iteamContainer}>
        <Text style={styles.iteamText}>{name}</Text>
        <TouchableOpacity onPress={handleDelete} style={styles.button}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },

  iteamText: {
    fontSize: 18,
    color: "#1a759f",
    fontWeight: "bold",
  },

  iteamContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#1a759f",
    paddingHorizontal: 8,
    paddingVertical: 36,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  button: {
    backgroundColor: theam.colorBlack,
    padding: 10,
    borderRadius: 5,
    color: theam.colorWhite,
  },

  buttonText: {
    color: theam.colorWhite,
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 6,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
