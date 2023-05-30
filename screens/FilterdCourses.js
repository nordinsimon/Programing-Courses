import { useRoute } from "@react-navigation/native";

import { COURSES } from "../data/course-data";

import CourseItem from "../components/CourseItem";

const FilterdCourses = () => {
  const route = useRoute();
  const { selectedCategories } = route.params;

  const filteredCourses = COURSES.filter((course) => {
    return course.categoryIds.some((category) =>
      selectedCategories.includes(category)
    );
  });

  return <CourseItem courses={filteredCourses} />;
};

export default FilterdCourses;
