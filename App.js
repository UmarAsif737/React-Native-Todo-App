import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("Umar");
  const changeState = () => {
    setName("Haseeb");
    setPerson({ name: name, age: 24 });
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Name {name}</Text>
      </View>
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: 200,
    borderColor: "black",
    borderWidth: 1,
    margin: 10,
    padding: 101,
  },
});
