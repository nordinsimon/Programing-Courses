import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import { useState, useContext } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TextInput,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { CoursesCtx } from "../store/CoursesCtx";

import CATEGORIES from "../data/categories";

import CategoriesSelector from "../components/newCourseComponents/CategoriesSelector";

const CreateNewCoureScreen = () => {
  const coursesCtx = useContext(CoursesCtx);
  const navigation = useNavigation();

  const [courseTitle, setCourseTitle] = useState("");
  const [courseCategoryIds, setCourseCategoryIds] = useState([]);
  const [courseBackground, setCourseBackground] = useState(
    "https://www.goldmansachs.com/intelligence/pages/multimedia/the-future-of-coding-is-conversation.jpg"
  );
  const [courseLogo, setCourseLogo] = useState(
    "https://cdn-icons-png.flaticon.com/512/26/26287.png"
  );
  const [courseHeader, setCourseHeader] = useState("");

  const [courseDescriptionInput, setCourseDescriptionInput] = useState("");
  const [courseDescription, setCourseDescription] = useState([]);

  const [courseContentInput, setCourseContentInput] = useState("");
  const [courseContent, setCourseContent] = useState([]);

  const [courseMomentVideoOrder, setCourseMomentVideoOrder] = useState(0);
  const [courseMomentVideoID, setCourseMomentVideoID] = useState("CE81zhJYidY");
  const [courseMomentVideoDescriptions, setCourseMomentVideoDescriptions] =
    useState("");
  const [courseMomentVideoGoalsInput, setCourseMomentVideoGoalsInput] =
    useState("");
  const [courseMomentVideoGoals, setCourseMomentVideoGoals] = useState([]);

  const [courseMoments, setCourseMoments] = useState([]);

  const addCourse = () => {
    const newCourse = {
      id: uuidv4(),
      title: courseTitle,
      categoryIds: courseCategoryIds,
      backgroundUrl: courseBackground,
      logoUrl: courseLogo,
      header: courseHeader,
      description: courseDescription,
      content: courseContent,
      moments: courseMoments,
    };
    coursesCtx.addCourse(newCourse);

    console.log("added course");
    console.log(newCourse);

    setCourseTitle("");
    setCourseCategoryIds([]);
    setCourseBackground(
      "https://www.goldmansachs.com/intelligence/pages/multimedia/the-future-of-coding-is-conversation.jpg"
    );
    setCourseLogo("https://cdn-icons-png.flaticon.com/512/26/26287.png");
    setCourseHeader("");
    setCourseDescriptionInput("");
    setCourseDescription([]);
    setCourseContentInput("");
    setCourseContent([]);
    setCourseMomentVideoOrder(0);
    setCourseMomentVideoID("CE81zhJYidY");
    setCourseMomentVideoDescriptions("");
    setCourseMomentVideoGoalsInput("");
    setCourseMomentVideoGoals([]);
    setCourseMoments([]);

    navigation.navigate("Coding Courses");
  };

  const categoriesPressHandler = (id) => {
    if (courseCategoryIds.includes(id)) {
      setCourseCategoryIds((prev) => prev.filter((item) => item !== id));
      return;
    }
    setCourseCategoryIds((prev) => [...prev, id]);
  };

  return (
    <ScrollView style={styles.screen}>
      <TextInput
        placeholder="Course Name"
        style={styles.input}
        value={courseTitle}
        onChangeText={(text) => setCourseTitle(text)}
      />
      <View style={styles.inputBox}>
        <Text style={styles.inputBoxHeader}>Select Categories:</Text>
        {CATEGORIES.map((category) => (
          <CategoriesSelector
            key={category.id}
            category={category}
            pressHandler={categoriesPressHandler}
          />
        ))}
      </View>
      <TextInput
        placeholder="Course Background (img url)"
        style={styles.input}
        value={courseBackground}
        onChangeText={(text) => setCourseBackground(text)}
      />
      <TextInput
        placeholder="Course Logo (img url)"
        style={styles.input}
        value={courseLogo}
        onChangeText={(text) => setCourseLogo(text)}
      />
      <TextInput
        placeholder="Course Header"
        style={styles.input}
        value={courseHeader}
        onChangeText={(text) => setCourseHeader(text)}
      />

      <View style={styles.bigBox}>
        <View style={styles.inputBox}>
          <Text style={styles.inputBoxHeader}>
            Course Description: (Add multiple)
          </Text>
          {courseDescription.map((item) => (
            <View key={uuidv4()}>
              <Text>{item}</Text>
            </View>
          ))}
        </View>
        <View style={styles.inputBoxAdd}>
          <TextInput
            placeholder="Course Description"
            style={styles.input}
            value={courseDescriptionInput}
            onChangeText={(text) => setCourseDescriptionInput(text)}
          />
          <Button
            title="Add"
            onPress={() => {
              setCourseDescription((prev) => [...prev, courseDescriptionInput]);
              setCourseDescriptionInput("");
            }}
          />
        </View>
      </View>

      <View style={styles.bigBox}>
        <View style={styles.inputBox}>
          <Text style={styles.inputBoxHeader}>
            Course Content: (Add multiple)
          </Text>
          {courseContent.map((item) => (
            <View key={uuidv4()}>
              <Text>{item}</Text>
            </View>
          ))}
        </View>
        <View style={styles.inputBoxAdd}>
          <TextInput
            placeholder="Course Content"
            style={styles.input}
            value={courseContentInput}
            onChangeText={(text) => setCourseContentInput(text)}
          />
          <Button
            title="Add"
            onPress={() => {
              setCourseContent((prev) => [...prev, courseContentInput]);
              setCourseContentInput("");
            }}
          />
        </View>
      </View>

      <View style={styles.bigBox}>
        <View style={styles.inputBox}>
          <Text style={styles.inputBoxHeader}>
            Course Videos: (Add multiple)
          </Text>
          {courseMoments.map((item) => (
            <View key={uuidv4()}>
              <Text>{item.videoDescriptions}</Text>
            </View>
          ))}
        </View>
        <TextInput
          placeholder="Video ID"
          style={styles.input}
          autoCapitalize="none"
          value={courseMomentVideoID}
          onChangeText={(text) => setCourseMomentVideoID(text)}
        />
        <TextInput
          placeholder="Video Description"
          style={styles.input}
          value={courseMomentVideoDescriptions}
          onChangeText={(text) => setCourseMomentVideoDescriptions(text)}
        />
        <View style={styles.bigBox}>
          <View style={styles.inputBox}>
            <Text style={styles.inputBoxHeader}>
              Video Goals: (Add multiple)
            </Text>
            {courseMomentVideoGoals.map((item) => (
              <View key={uuidv4()}>
                <Text>{item}</Text>
              </View>
            ))}
          </View>
          <View style={styles.inputBoxAdd}>
            <TextInput
              placeholder="Video Goals"
              style={styles.input}
              value={courseMomentVideoGoalsInput}
              onChangeText={(text) => setCourseMomentVideoGoalsInput(text)}
            />
            <Button
              title="Add"
              onPress={() => {
                setCourseMomentVideoGoals((prev) => [
                  ...prev,
                  courseMomentVideoGoalsInput,
                ]);
                setCourseMomentVideoGoalsInput("");
              }}
            />
          </View>
        </View>
        <View style={styles.inputBoxAddVideo}>
          <Button
            title="Add Video"
            onPress={() => {
              setCourseMoments((prev) => [
                ...prev,
                {
                  videoOrder: courseMomentVideoOrder,
                  videoId: courseMomentVideoID,
                  videoDescriptions: courseMomentVideoDescriptions,
                  videoGoals: courseMomentVideoGoals,
                },
              ]);
              setCourseMomentVideoOrder((prev) => prev + 1);
              setCourseMomentVideoID("CE81zhJYidY");
              setCourseMomentVideoDescriptions("");
              setCourseMomentVideoGoals([]);
            }}
          />
        </View>
      </View>

      <Button title="Add Course" onPress={addCourse} />
      <View style={{ height: 30 }}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  input: {
    height: 40,
    padding: 10,
    margin: 12,
    borderWidth: 1,
    flex: 1,
  },
  bigBox: {
    margin: 12,
    borderWidth: 1,
  },
  inputBox: {
    padding: 10,
    margin: 12,
    marginBottom: 0,
    borderWidth: 1,
  },
  inputBoxHeader: {
    fontSize: 18,
    fontWeight: "bold",
  },
  inputBoxAdd: {
    marginRight: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputBoxAddVideo: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CreateNewCoureScreen;
