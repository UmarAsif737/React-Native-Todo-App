import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [name, setName] = useState("Umar");
  const [person, setPerson] = useState({ name: name, age: 22 });
  const changeState = () => {
    setName("Haseeb");
    setPerson({ name: name, age: 24 });
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Name: {name}</Text>
        <Text>
          Name of Person is : {person.name} and his age is : {person.age}
        </Text>
      </View>
      <StatusBar style="auto" />

      <View>
        <Button title="Change the State" onPress={changeState} />
      </View>
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
});
