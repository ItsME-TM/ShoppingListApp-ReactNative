import { StyleSheet, View } from "react-native";
import { ShoppingListItems } from "./components/ShoppingListItems";

export default function App() {
  return (
    <View style={styles.container}>
      <ShoppingListItems name="coffee" />
      <ShoppingListItems name="tea" />
      <ShoppingListItems name="Orange Juice" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
