import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ContentItem = ({ content }) => {
  return content.map((item, index) => (
    <View key={"Content" + index} style={styles.contentItem}>
      <Ionicons
        name="ios-checkmark"
        size={24}
        color="green"
        style={styles.icon}
      />
      <Text style={styles.contentItemText}>{item}</Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  contentItem: {
    flexDirection: "row",
    padding: 2,
    margin: 2,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  contentItemText: {
    fontSize: 12,
    marginRight: 50,
  },
  icon: {
    marginRight: 10,
  },
});
export default ContentItem;
