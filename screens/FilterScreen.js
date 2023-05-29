import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/Colors";

const FilterScreen = () => {
  return (
    <View style={styles.filter}>
      <Text style={styles.filterText}>Filter</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  filter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  filterText: {
    fontSize: 16,
    color: Colors.primary250,
  },
});

export default FilterScreen;
