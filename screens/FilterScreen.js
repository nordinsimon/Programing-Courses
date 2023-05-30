import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import CATEGORIES from "../data/categories";
import CategoriesBox from "../components/CategoriesBox";

import Colors from "../constants/Colors";

const FilterScreen = () => {
  const navigation = useNavigation();
  const [selectedCategories, setSelectedCategories] = useState([]);

  const pressHandler = (id) => {
    if (selectedCategories.includes(id)) {
      setSelectedCategories((prev) => prev.filter((item) => item !== id));
    } else {
      setSelectedCategories((prev) => [...prev, id]);
    }
  };

  const applyPressHandler = () => {
    if (selectedCategories.length === 0) return;
    navigation.navigate("FilterdCourses", { selectedCategories });
  };

  return (
    <View style={styles.filter}>
      <View style={styles.categories}>
        {CATEGORIES.map((category) => {
          return (
            <CategoriesBox
              key={category.id}
              category={category}
              pressHandler={pressHandler}
            />
          );
        })}
      </View>
      <Pressable style={styles.button} onPress={applyPressHandler}>
        <Text style={styles.buttonText}>Apply</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  categories: {
    padding: 10,
    margin: 20,
    borderRadius: 5,
  },
  button: {
    backgroundColor: Colors.primary250,
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    margin: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default FilterScreen;
