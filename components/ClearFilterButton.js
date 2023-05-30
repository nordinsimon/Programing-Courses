import { Pressable, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Colors from "../constants/Colors";

const ClearFilterButton = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={({ pressed }) =>
        pressed ? styles.filterPressed : styles.filterPress
      }
      onPress={() => navigation.navigate("Drawer")}
    >
      <Text style={styles.filterText}>Clear Filter</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  filterPress: {
    marginRight: 15,
  },
  filterPressed: {
    marginRight: 15,
    opacity: 0.5,
  },

  filterText: {
    fontSize: 16,
    color: Colors.primary250,
  },
});

export default ClearFilterButton;
