import { createContext, useState } from "react";

export const FavouritesCtx = createContext({
  ids: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

const FavouritesCtxProvider = ({ children }) => {
  const [favouriteIds, setFavoriteIds] = useState([]);
  const addFavorite = (id) => {
    setFavoriteIds((prev) => [...prev, id]);
  };
  const removeFavorite = (id) => {
    setFavoriteIds((prev) => prev.filter((item) => item !== id));
  };
  const value = {
    ids: favouriteIds,
    addFavorite,
    removeFavorite,
  };
  return (
    <FavouritesCtx.Provider value={value}>{children}</FavouritesCtx.Provider>
  );
};

export default FavouritesCtxProvider;
