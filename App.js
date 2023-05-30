import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";

import { StyleSheet, Button, ScrollView } from "react-native";

import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CoursesCtxProvider from "./store/CoursesCtx";
import FavouritesCtxProvider from "./store/FavouritesCtx";
import WatchedVideosCtxProvider from "./store/WatchedVideosCtx";

import Home from "./screens/Home";
import CourseDetailsScreen from "./screens/CourseDetailsScreen";
import CourseVideosScreen from "./screens/CourseVideosScreen";
import FilterScreen from "./screens/FilterScreen";
import FavouritesScreens from "./screens/FavouritesScreens";
import FilterdCourses from "./screens/FilterdCourses";
import CreateNewCoureScreen from "./screens/CreateNewCoureScreen";

import FilterButton from "./components/FilterButton";
import ClearFilterButton from "./components/ClearFilterButton";

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
      <Drawer.Screen
        name={"Create New Course"}
        component={CreateNewCoureScreen}
      />
      <Drawer.Screen name={"Favourites"} component={FavouritesScreens} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <CoursesCtxProvider>
        <WatchedVideosCtxProvider>
          <FavouritesCtxProvider>
            <NavigationContainer theme={Theme}>
              <Stack.Navigator
                screenOptions={{
                  headerStyle: { backgroundColor: Colors.background0 },
                  headerTintColor: "black",
                  headerBackTitleVisible: false,
                }}
              >
                <Stack.Screen
                  name={"Drawer"}
                  component={DrawerNavigator}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name={"Category Filter"}
                  component={FilterScreen}
                  //options={{ headerShown: false }}
                />
                <Stack.Screen
                  name={"FilterdCourses"}
                  component={FilterdCourses}
                  options={{
                    headerLeft: () => <ClearFilterButton />,
                    headerRight: () => <FilterButton />,
                  }}
                />
                <Stack.Screen
                  name={"CourseDetails"}
                  component={CourseDetailsScreen}
                />
                <Stack.Screen
                  name="CourseVideos"
                  component={CourseVideosScreen}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </FavouritesCtxProvider>
        </WatchedVideosCtxProvider>
      </CoursesCtxProvider>
    </>
  );
}

const styles = StyleSheet.create({
  drawer: {
    marginTop: 50,
    backgroundColor: Colors.background0,
  },
});
