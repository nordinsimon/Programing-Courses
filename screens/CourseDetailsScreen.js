import { useLayoutEffect, useContext } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import YoutubePlayer from "react-native-youtube-iframe";

import { CoursesCtx } from "../store/CoursesCtx";
import { WatchedVideosCtx } from "../store/WatchedVideosCtx";

import ContentItem from "../components/ContentItem";
import CourseDescription from "../components/CourseDescription";
import LikeButton from "../components/LikeButton";

const CourseDetailsScreen = () => {
  const coursesCtx = useContext(CoursesCtx);
  const COURSES = coursesCtx.courses;
  const watchedVideosCtx = useContext(WatchedVideosCtx);
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

  const endedHandler = () => {
    watchedVideosCtx.addWatchedVideo(introVideoId);
  };

  return (
    <ScrollView style={styles.container}>
      <YoutubePlayer
        height={219}
        videoId={introVideoId}
        onChangeState={(event) => {
          if (event === "ended") endedHandler();
        }}
      />
      <View style={styles.header}>
        <Text style={styles.headerText}>{course.header}</Text>
        <LikeButton offset={false} id={course.id} />
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
