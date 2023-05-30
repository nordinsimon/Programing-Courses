import { useContext } from "react";
import { Text, View } from "react-native";

import { CoursesCtx } from "../store/CoursesCtx";
import { FavouritesCtx } from "../store/FavouritesCtx";
import CourseItem from "../components/CourseItem";

const FavouritesScreens = () => {
  const coursesCtx = useContext(CoursesCtx);
  const COURSES = coursesCtx.courses;
  const favouritesCtx = useContext(FavouritesCtx);

  const favouritesCourses = COURSES.filter((course) =>
    favouritesCtx.ids.includes(course.id)
  );

  if (favouritesCourses.length === 0 || !favouritesCourses) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No favourites Courses found. Start adding some!</Text>
      </View>
    );
  } else {
    return <CourseItem courses={favouritesCourses} scrollEnabled={true} />;
  }
};

export default FavouritesScreens;
