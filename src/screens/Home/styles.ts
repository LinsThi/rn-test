import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");
const PADDING_TOP = height / 13;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2a2a2a",
    flex: 1,
    paddingTop: PADDING_TOP,
    paddingHorizontal: 20,
  },
});
