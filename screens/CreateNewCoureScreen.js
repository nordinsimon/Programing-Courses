import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const CreateNewCoureScreen = () => {
  return (
    <View style={styles.screen}>
      <TextInput placeholder="Course Name" style={styles.input} />
      <TextInput placeholder="Course Image (img url)" style={styles.input} />
      <TextInput placeholder="Course Logo (img url)" style={styles.input} />
      <TextInput placeholder="Course Description" style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    width: "85%",
    height: 40,
    padding: 10,
    margin: 12,
    borderWidth: 1,
  },
});

export default CreateNewCoureScreen;
