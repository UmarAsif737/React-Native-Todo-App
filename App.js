import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [name, setName] = useState([
    { name: "Umar", id: 1 },
    { name: "Haseeb", id: 2 },
    { name: "Usman", id: 3 },
    { name: "Bilal", id: 4 },
    { name: "Umara", id: 5 },
    { name: "Haseeba", id: 6 },
    { name: "Usmana", id: 7 },
    { name: "Bilala", id: 8 },
  ]);
  const pressHandler = (id) => {
    console.log(id);
    setName(name.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
        data={name}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    borderColor: "black",
    borderWidth: 1,
    margin: 20,
    padding: 30,
    backgroundColor: "pink",
    color: "black",
    fontSize: 20,
  },
});
