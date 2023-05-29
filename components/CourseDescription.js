import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const CourseDescription = ({ description }) => {
  const [expanded, setExpanded] = useState(false);

  function toggleItem() {
    setExpanded(!expanded);
  }

  const body = description.map((item, index) => (
    <View key={"Description" + index} style={styles.contentItem}>
      <Text style={styles.contentItemText}>{item}</Text>
    </View>
  ));

  return (
    <View style={styles.accordContainer}>
      <TouchableOpacity style={styles.accordHeader} onPress={toggleItem}>
        <Text style={styles.accordTitle}>Description</Text>
        <Ionicons
          name={expanded ? "chevron-up" : "chevron-down"}
          size={20}
          color="#bbb"
        />
      </TouchableOpacity>
      {expanded && body}
    </View>
  );
};

const styles = StyleSheet.create({
  accordContainer: {
    paddingBottom: 4,
  },
  accordHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 10,
  },
  accordTitle: {
    fontSize: 20,
  },

  contentItem: {
    flexDirection: "row",
    padding: 2,
    margin: 2,
    marginTop: 15,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  contentItemText: {
    flex: 1,
    fontSize: 12,
  },
  icon: {
    flex: 0,
    marginRight: 10,
  },
});
export default CourseDescription;
