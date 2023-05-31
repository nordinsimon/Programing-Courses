import { useState } from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CategoriesSelector = ({ category, pressHandler }) => {
  const [selected, setSelected] = useState(false);

  const localPressHandler = () => {
    setSelected((prev) => !prev);
    pressHandler(category.id);
  };

  return (
    <Pressable
      key={category.id}
      style={styles.categoriesPressable}
      onPress={localPressHandler}
    >
      <Ionicons
        name={selected ? "ios-checkmark" : "ios-add"}
        size={24}
        color="black"
      />
      <Text>{category.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  categoriesPressable: {
    flexDirection: "row",
    padding: 4,
    margin: 4,
    alignItems: "center",
  },
});

export default CategoriesSelector;
