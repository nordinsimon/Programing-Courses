import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";

import {
  StyleSheet,
  Text,
  Dimensions,
  Button,
  ScrollView,
  Pressable,
  View,
} from "react-native";

import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import FavouritesCtxProvider from "./store/context/FavouritesCtx";

import Home from "./screens/Home";
import CourseDetailsScreen from "./screens/CourseDetailsScreen";
import CourseVideosScreen from "./screens/CourseVideosScreen";
import FilterScreen from "./screens/FilterScreen";
import FavouritesScreens from "./screens/FavouritesScreens";

import FilterButton from "./components/FilterButton";

import Colors from "./constants/Colors";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background0,
  },
};

const DrawerItems = ({ navigation }) => {
  return (
    <ScrollView style={styles.drawer}>
      <Button
        title={"Courses"}
        onPress={() => navigation.navigate("Coding Courses")}
      />
      <Button
        title={"Create New Course"}
        onPress={() => navigation.navigate("Create New Course")}
      />
      <Button
        title={"Favourites"}
        onPress={() => navigation.navigate("Favourites")}
      />
    </ScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerItems {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: Colors.background0,
        },
        headerStyle: { backgroundColor: Colors.background0 },
        headerTintColor: Colors.primary250,
        headerRight: () => <FilterButton />,
      }}
    >
      <Drawer.Screen name={"Coding Courses"} component={Home} />
      <Drawer.Screen name={"Favourites"} component={FavouritesScreens} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <FavouritesCtxProvider>
        <NavigationContainer theme={Theme}>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: Colors.background0 },
              headerTintColor: "black",
            }}
          >
            <Stack.Screen
              name={"Drawer"}
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen name={"Filter"} component={FilterScreen} />
            <Stack.Screen
              name={"CourseDetails"}
              component={CourseDetailsScreen}
            />
            <Stack.Screen
              name="CourseVideos"
              component={CourseVideosScreen}
              options={{ headerBackTitle: "backf" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavouritesCtxProvider>
    </>
  );
}

const styles = StyleSheet.create({
  drawer: {
    marginTop: 50,
    backgroundColor: Colors.background0,
  },
});
