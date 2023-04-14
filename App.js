import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from "react-native";
import Header from "./components/header";
import AddTodo from "./components/addTodo";
import ListTodos from "./components/listTodos";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const pressHandler = (item) => {
    Alert.alert(
      `Delete \"${item.text}\"?`,
      "If you want to delete this todo press Yes otherwise No",
      [
        {
          text: "Yes",
          onPress: () =>
            setTodos((prevTodos) => {
              return prevTodos.filter((todo) => todo != item);
            }),
        },
        {
          text: "No",
          onPress: () => {
            return;
          },
        },
      ]
    );
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("OOPS", "Todo must be over 3 characters long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("dismissed");
      }}
    >
      <View style={styles.container}>
        <StatusBar />
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <ListTodos todos={todos} pressHandler={pressHandler} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
