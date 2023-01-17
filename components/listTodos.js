import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import TodoItem from "./todoItem";
const ListTodos = ({ todos, pressHandler }) => {
  return (
    <View style={styles.list}>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem item={item} pressHandler={pressHandler} />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginTop: 20,
  },
});
export default ListTodos;
