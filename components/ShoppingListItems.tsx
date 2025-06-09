import { Alert, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { theme } from "../theme";
import AntDesign from "@expo/vector-icons/AntDesign";

type Props = {
  name: string;
  isCompleted?: boolean;
  onDelete: () => void;
};

export function ShoppingListItems({ name, isCompleted, onDelete }: Props) {
  const handleDelete = () => {
    Alert.alert(`Wanna delete ${name}?`, "Sure you want to delete this item?", [
      {
        text: "Yes",
        onPress: () => onDelete(),
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
      <TouchableOpacity onPress={handleDelete}>
        <AntDesign
          name="closecircle"
          size={24}
          color={isCompleted ? theme.colorGrey : theme.colorRed}
        />
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
});
