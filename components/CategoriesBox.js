import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CategoriesBox = ({ category, pressHandler }) => {
  const [isSelected, setIsSelected] = useState(false);

  const localPressHandler = () => {
    setIsSelected((prev) => !prev);
    pressHandler(category.id);
  };

  return (
    <Pressable
      key={category.id}
      style={styles.category}
      onPress={localPressHandler}
    >
      <Ionicons
        name={isSelected ? "ios-radio-button-on" : "ios-radio-button-off"}
        size={24}
        color="black"
      />
      <Text styles={styles.categoryText}>{category.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  category: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    margin: 5,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 20,
  },
});

export default CategoriesBox;
