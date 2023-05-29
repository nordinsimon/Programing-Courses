import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Pressable, Platform } from "react-native";

const GridItem = ({ id, title, color }) => {
  const navigation = useNavigation();
  const pressHandler = () => {
    navigation.navigate("MealsOverview", { categoryId: id });
  };
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Pressable
        onPress={pressHandler}
        style={({ pressed }) =>
          pressed ? [styles.pressed, styles.button] : styles.button
        }
      >
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  button: {
    flex: 1,
    padding: 16,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    backgroundColor: "grey",
    opacity: 0.4,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default GridItem;
