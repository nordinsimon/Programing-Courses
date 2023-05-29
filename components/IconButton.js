import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ icon, colour, presshandler }) => {
  return (
    <Pressable
      onPress={presshandler}
      style={({ pressed }) => (pressed ? styles.pressed : null)}
    >
      <Ionicons name={icon} size={24} color="black" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    borderColor: "black",
    opacity: 0.2,
  },
});

export default IconButton;
