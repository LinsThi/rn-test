import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

export function Header() {
  const [value, setValue] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Search for a name"
        keyboardType="numeric"
        placeholderTextColor="#acacac"
      />

      <TouchableOpacity>
        <Ionicons name="filter" size={24} color="#acacac" />
      </TouchableOpacity>
    </View>
  );
}
