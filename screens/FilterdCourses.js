import { useContext } from "react";
import { useRoute } from "@react-navigation/native";

import { CoursesCtx } from "../store/CoursesCtx";

import CourseItem from "../components/CourseItem";

const FilterdCourses = () => {
  const coursesCtx = useContext(CoursesCtx);
  const COURSES = coursesCtx.courses;
  const route = useRoute();
  const { selectedCategories } = route.params;

  const filteredCourses = COURSES.filter((course) => {
    return course.categoryIds.some((category) =>
      selectedCategories.includes(category)
    );
  });

  return <CourseItem courses={filteredCourses} scrollEnabled={true} />;
};

export default FilterdCourses;
