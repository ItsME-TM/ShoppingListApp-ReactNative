import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Pressable, Alert } from 'react-native';
import { theam } from './theam';

export default function App() {
  const handleDelete = () => {
    Alert.alert(
      "Wanna delete this?",
      "Sure you want to delete this item?",
      [
        {
          text: "Yes",
          onPress: () => console.log("Deleting..."),
          style: "destructive",
        },
        {
          text: "No",
          onPress: () => console.log("Cancelled"),
          style: "cancel",
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      
      <View style = {styles.iteamContainer}>
        <Text style = {styles.iteamText}>Open up</Text>
          <TouchableOpacity 
          onPress = {handleDelete}
          style = {styles.button}
          >
            <Text
            style = {styles.buttonText}
            >
              Delete
            </Text>
        </TouchableOpacity>
      </View>
      <Text>Hello, world!</Text>
      {NaN ? <Text>Welcome to your Expo app!</Text> : null}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  iteamText: {
    fontSize: 18,
    color: '#1a759f',
    fontWeight: 'bold'
  },

  iteamContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#1a759f',
    paddingHorizontal: 8,
    paddingVertical: 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
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
    fontWeight: 'bold',
    borderRadius: 6,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
