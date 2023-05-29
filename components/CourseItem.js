import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import Colors from "../constants/Colors";

const CourseItem = ({ id, title, backgroundUrl, logoUrl }) => {
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
          <Text style={styles.title}>{title}</Text>
        </Pressable>
      </View>
    </View>
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
  title: {
    margin: 10,
    color: Colors.primaryText,
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default CourseItem;
