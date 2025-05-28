import { StyleSheet, View } from "react-native";
import { ShoppingListItems } from "../components/ShoppingListItems";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Link
        href={"/counter"}
        style={{ textAlign: "center", marginBottom: 18, fontSize: 24 }}
      >
        Go to Counter
      </Link>
      <ShoppingListItems name="coffee" />
      <ShoppingListItems name="tea" isCompleted />
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
