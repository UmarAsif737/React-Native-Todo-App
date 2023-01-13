import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [name, setName] = useState("Umar");
  const [person, setPerson] = useState();
  return (
    <View style={styles.container}>
      <Text>M aay Firast App</Text>
      <StatusBar style="auto" />
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
