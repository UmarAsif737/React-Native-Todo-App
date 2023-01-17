import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ pressHandler, item }) {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => pressHandler(item)}>
        <MaterialIcons name="delete" size={18} color="#333" />
      </TouchableOpacity>
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  itemText: {
    marginLeft: 10,
  },
});
