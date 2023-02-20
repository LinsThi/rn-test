import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  TextInputProps,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

export function Header({ ...rest }: TextInputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for a name"
        placeholderTextColor="#acacac"
        {...rest}
      />

      <TouchableOpacity>
        <Ionicons name="filter" size={24} color="#acacac" />
      </TouchableOpacity>
    </View>
  );
}
