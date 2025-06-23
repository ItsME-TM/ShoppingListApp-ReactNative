import { useState, useEffect } from "react";
import {
  FlatList,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { getFromStorage, saveToStorage } from "../../utils/storage";
import { theme } from "../../theme";

type Note = {
  id: string;
  text: string;
  timestamp: number;
};

export default function IdeaScreen() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    const fetchNotes = async () => {
      const data = await getFromStorage("TeeRan-Notes");
      if (data) setNotes(data);
    };
    fetchNotes();
  }, []);

  const handleAddNote = () => {
    if (value.trim()) {
      const newNote = {
        id: Date.now().toString(),
        text: value,
        timestamp: Date.now(),
      };
      const updatedNotes = [newNote, ...notes].sort(
        (a, b) => b.timestamp - a.timestamp,
      );
      setNotes(updatedNotes);
      saveToStorage("TeeRan-Notes", updatedNotes);
      setValue("");
    }
  };

  const handleDelete = (id: string) => {
    Alert.alert("Delete Note?", "Are you sure you want to delete this note?", [
      {
        text: "Yes",
        onPress: () => {
          const updatedNotes = notes.filter((note) => note.id !== id);
          setNotes(updatedNotes);
          saveToStorage("TeeRan-Notes", updatedNotes);
        },
        style: "destructive",
      },
      { text: "No", style: "cancel" },
    ]);
  };

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <Text>No ideas yet</Text>
        </View>
      }
      ListHeaderComponent={
        <TextInput
          placeholder="Add a new idea..."
          value={value}
          onChangeText={setValue}
          onSubmitEditing={handleAddNote}
          style={styles.textInput}
          returnKeyType="done"
        />
      }
      data={notes}
      renderItem={({ item }) => (
        <View style={styles.noteContainer}>
          <Text style={styles.noteText} numberOfLines={1}>
            {item.text}
          </Text>
          <TouchableOpacity onPress={() => handleDelete(item.id)}>
            <AntDesign name="closecircle" size={24} color={theme.colorRed} />
          </TouchableOpacity>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  contentContainer: {
    paddingTop: 12,
  },
  textInput: {
    borderWidth: 2,
    borderColor: theme.colorLightGrey,
    padding: 12,
    marginHorizontal: 12,
    marginBottom: 12,
    borderRadius: 50,
    fontSize: 18,
    backgroundColor: theme.colorWhite,
  },
  noteContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme.colorCerulean,
  },
  noteText: {
    fontSize: 18,
    flex: 1,
    color: theme.colorCerulean,
  },
  emptyContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 18,
  },
});
