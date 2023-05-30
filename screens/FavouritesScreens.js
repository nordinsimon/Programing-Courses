import { useContext } from "react";
import { Text, View } from "react-native";

import { FavouritesCtx } from "../store/context/FavouritesCtx";

import { COURSES } from "../data/course-data";
import CourseItem from "../components/CourseItem";

const FavouritesScreens = () => {
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
    return <CourseItem courses={favouritesCourses} />;
  }
};

export default FavouritesScreens;
