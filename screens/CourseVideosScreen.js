import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

import { COURSES } from "../data/course-data";

import Colors from "../constants/Colors";

import MomentsBox from "../components/MomentsBox";

const CourseVideosScreen = () => {
  const route = useRoute();
  const { courseId } = route.params;
  const course = COURSES.find((course) => course.id === courseId);
  const videos = course.moments.length;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{videos} videos</Text>
      </View>
      {course.moments.map((moment) => (
        <MomentsBox key={moment.videoOrder} moment={moment} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background0,
  },
  header: {
    margin: 15,
    marginBottom: 25,
    alignItems: "center",
  },
  headerText: {
    fontSize: 16,
    color: Colors.primaryText,
  },
});

export default CourseVideosScreen;
