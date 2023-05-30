import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";

import { COURSES } from "../data/course-data";

import CourseItem from "../components/CourseItem";

import Colors from "../constants/Colors";

const Home = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={{
            uri: "https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/programming%20evolution.jpg?itok=WTj9-yNz",
          }}
          resizeMode="cover"
        >
          <Text style={styles.title}>
            Level Up Your Coding With The Best Courses
          </Text>
        </ImageBackground>
        <Text style={styles.subTitle}>What do you want to leran today?</Text>
      </View>
      <CourseItem courses={COURSES} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background100,
    marginVertical: 10,
    marginHorizontal: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  backgroundImage: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitle: {
    margin: 10,
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  scrollView: {
    paddingBottom: 30,
  },
});

export default Home;
