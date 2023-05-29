import { useContext } from "react";
import { Text, View } from "react-native";

import { FavouritesCtx } from "../store/context/FavouritesCtx";
//import { MEALS } from "../data/dummy-data";

//import MealsList from "../components/MealsList";

const FavouritesScreens = () => {
  const favouritesMealCtx = useContext(FavouritesCtx);
  /*   const favouritesMeals = MEALS.filter((meal) =>
    favouritesMealCtx.ids.includes(meal.id)
  ); */
  const favouritesMeals = [];
  if (favouritesMeals.length === 0 || !favouritesMeals) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No favourites Courses found. Start adding some!</Text>
      </View>
    );
  } else {
    return <MealsList meals={favouritesMeals} />;
  }
};

export default FavouritesScreens;
