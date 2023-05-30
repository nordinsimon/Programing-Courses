import { View, Text, StyleSheet, FlatList } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import { CATEGORIES } from "../data/course-data";
import { COURSES } from "../data/course-data";

import CourseItem from "../components/CourseItem";

import Colors from "../constants/Colors";

const FilterdCourses = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { selectedCategories } = route.params;

  const filteredCourses = COURSES.filter((course) => {
    return course.categoryIds.some((category) =>
      selectedCategories.includes(category)
    );
  });

  console.log("filterdCourses", filteredCourses.length);

  console.log("filteredCourses", filteredCourses);

  const renderGridItem = (itemData) => {
    const course = itemData.item;
    return <CourseItem {...course} />;
  };

  console.log("selectedCategories", selectedCategories);
  return (
    <View style={styles.filter}>
      <FlatList
        data={filteredCourses}
        renderItem={renderGridItem}
        keyExtractor={(item) => item.id}
        numColumns={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filter: {},
});

export default FilterdCourses;
