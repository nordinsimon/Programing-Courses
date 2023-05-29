import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

import GridItem from "../components/GridItem";

const CategoriesScreen = () => {
  const renderGridItem = (itemData) => {
    const category = itemData.item;
    return <GridItem {...category} />;
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderGridItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
