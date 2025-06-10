import { StyleSheet, TextInput, FlatList, View, Text } from "react-native";
import { ShoppingListItems } from "../components/ShoppingListItems";
import { theme } from "../theme";
import { useState } from "react";

type ShoppingListItemsType = {
  id: string;
  name: string;
  completedAtTimestamp?: number;
};

export default function App() {
  const [shoppingList, setShoppingList] = useState<ShoppingListItemsType[]>([]);
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value) {
      const newShoppingList = [
        {
          id: new Date().toTimeString(),
          name: value,
        },
        ...shoppingList,
      ];
      setShoppingList(newShoppingList);
      setValue("");
    }
  };

  const handleDelete = (id: string) => {
    const newShoppingList = shoppingList.filter((item) => item.id !== id);
    setShoppingList(newShoppingList);
    console.log("Deleted item with id:", id);
  };

  const handleToggleComplete = (id: string) => {
    const newShoppingList = shoppingList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completedAtTimestamp: item.completedAtTimestamp
            ? undefined
            : Date.now(),
        };
      }
      return item;
    });
    setShoppingList(newShoppingList);
  };

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      stickyHeaderIndices={[0]}
      ListEmptyComponent={
        <View style={styles.listEmptyContainer}>
          <Text>Shopping list is empty</Text>
        </View>
      }
      data={shoppingList}
      ListHeaderComponent={
        <TextInput
          placeholder="Add a new item..."
          style={styles.textInput}
          value={value}
          onChangeText={setValue}
          returnKeyType="done"
          onSubmitEditing={handleSubmit}
        />
      }
      renderItem={({ item }) => {
        return (
          <ShoppingListItems
            name={item.name}
            onDelete={() => handleDelete(item.id)}
            onToggleComplete={() => handleToggleComplete(item.id)}
            isCompleted={Boolean(item.completedAtTimestamp)}
          />
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    paddingTop: 12,
  },
  textInput: {
    borderColor: theme.colorLightGrey,
    borderWidth: 2,
    padding: 12,
    marginHorizontal: 12,
    marginBottom: 12,
    fontSize: 18,
    borderRadius: 50,
    backgroundColor: theme.colorWhite,
  },
  listEmptyContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 18,
  },
});
