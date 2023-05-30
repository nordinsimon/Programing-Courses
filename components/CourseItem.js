import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  Pressable,
  FlatList,
} from "react-native";

import LikeButton from "./LikeButton";

import Colors from "../constants/Colors";

const CourseItem = ({ courses }) => {
  const renderGridItem = (itemData) => {
    const course = itemData.item;
    return <CourseItemBox {...course} />;
  };

  const CourseItemBox = ({ id, title, backgroundUrl, logoUrl }) => {
    const navigation = useNavigation();
    const pressHandler = () => {
      navigation.navigate("CourseDetails", { courseId: id });
    };
    return (
      <View style={styles.container}>
        <View style={styles.overflow}>
          <Pressable onPress={pressHandler}>
            <ImageBackground
              style={styles.backgroundImage}
              source={{ uri: backgroundUrl }}
              resizeMode="cover"
            >
              <Image style={styles.image} source={{ uri: logoUrl }} />
            </ImageBackground>
            <View style={styles.buttom}>
              <Text style={styles.title}>{title}</Text>
              <LikeButton offset={true} id={id} />
            </View>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={courses}
      renderItem={renderGridItem}
      keyExtractor={(item) => item.id}
      numColumns={1}
      style={styles.flatList}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: Colors.background100,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  overflow: {
    overflow: "hidden",
    borderRadius: 10,
  },
  backgroundImage: {
    height: 200,
  },
  image: {
    margin: 10,
    width: 50,
    height: 50,
  },
  buttom: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    margin: 10,
    color: Colors.primaryText,
    fontSize: 24,
    fontWeight: "bold",
  },
  flatList: {
    marginBottom: 20,
  },
});

export default CourseItem;
