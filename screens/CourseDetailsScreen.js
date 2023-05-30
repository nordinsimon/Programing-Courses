import { useLayoutEffect, useContext } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import YoutubePlayer from "react-native-youtube-iframe";

import { useRoute, useNavigation } from "@react-navigation/native";

import { COURSES } from "../data/course-data";

import ContentItem from "../components/ContentItem";
import CourseDescription from "../components/CourseDescription";

const CourseDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { courseId } = route.params;
  const course = COURSES.find((course) => course.id === courseId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: course.title + " course",
    });
  }, [navigation, course]);

  const introVideoId = course.moments.filter(
    (moment) => moment.videoOrder === 0
  )[0].videoId;

  return (
    <ScrollView style={styles.container}>
      <YoutubePlayer height={219} videoId={introVideoId} />
      <View style={styles.header}>
        <Text style={styles.headerText}>{course.header}</Text>
        <View style={styles.iconBox}>
          <Ionicons
            name="ios-heart-outline"
            size={24}
            color="green"
            style={styles.icon}
          />
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentTitle}>Course content</Text>
        <ContentItem content={course.content} />
      </View>
      <View style={styles.content}>
        <CourseDescription description={course.description} />
      </View>
      <View style={styles.content}>
        <Button
          title="Start Course"
          onPress={() =>
            navigation.navigate("CourseVideos", { courseId: course.id })
          }
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    padding: 10,
    margin: 10,
    justifyContent: "space-between",
    marginBottom: 0,
    paddingBottom: 0,
  },
  headerText: {
    flex: 1,
    fontSize: 24,
  },
  iconBox: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
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
  content: {
    padding: 10,
    margin: 10,
  },
  contentTitle: {
    fontSize: 18,
    marginBottom: 10,
  },

  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default CourseDetailsScreen;
