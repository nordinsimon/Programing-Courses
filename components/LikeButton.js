import { useContext } from "react";
import { Pressable, StyleSheet } from "react-native";

import { FavouritesCtx } from "../store/context/FavouritesCtx";

import { Ionicons } from "@expo/vector-icons";

const LikeButton = ({ id, offset }) => {
  const favouritesCtx = useContext(FavouritesCtx);
  const isFavourite = favouritesCtx.ids.includes(id);

  const favouritesHandler = () => {
    if (isFavourite) {
      favouritesCtx.removeFavourite(id);
    } else {
      favouritesCtx.addFavourite(id);
    }
  };

  return (
    <Pressable
      style={offset ? stylesOffset.iconBox : styles.iconBox}
      onPress={favouritesHandler}
    >
      <Ionicons
        name={isFavourite ? "ios-heart" : "ios-heart-outline"}
        size={24}
        color="green"
        style={styles.icon}
      />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  iconBox: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 35,
    height: 35,
    borderRadius: 25,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  icon: {
    flex: 0,
  },
});

const stylesOffset = StyleSheet.create({
  iconBox: {
    marginTop: -17.5,
    marginRight: 20,
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 35,
    height: 35,
    borderRadius: 25,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  icon: {
    flex: 0,
  },
});

export default LikeButton;
