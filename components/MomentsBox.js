import { useState } from "react";

import { View, Text, StyleSheet, Pressable } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import ContentItem from "./ContentItem";

import Colors from "../constants/Colors";

const MomentsBox = ({ moment }) => {
  const [pressed, setPressed] = useState(false);
  const PressHandler = () => {
    setPressed(!pressed);
  };
  const LongPressHandler = () => {
    console.log("long pressed");
  };

  return (
    <Pressable
      style={styles.momentBox}
      onPress={PressHandler}
      onLongPress={LongPressHandler}
    >
      <View style={styles.momentHeader}>
        <Ionicons name="ios-lock-closed-outline" size={30} color="black" />
        <Text style={styles.momentText}>{moment.videoDescriptions}</Text>
      </View>

      {pressed ? (
        <View style={styles.contentBox}>
          <Text style={styles.contentBoxText}>This video shows:</Text>
          <ContentItem content={moment.videoGoals} />
        </View>
      ) : null}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  momentBox: {
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginHorizontal: 20,

    backgroundColor: Colors.background0,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  momentHeader: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
  },
  momentText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  icon: {
    flex: 0,
    marginRight: 10,
  },
  contentBox: {
    marginTop: 25,
  },
  contentBoxText: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default MomentsBox;
