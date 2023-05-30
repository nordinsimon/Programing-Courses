import { createContext, useState } from "react";

import defaultCourses from "../data/defaultCourses";

export const CoursesCtx = createContext({
  courses: [],
  addCourse: () => {},
  removeCourse: () => {},
});

const CoursesCtxProvider = ({ children }) => {
  const [courses, setCourses] = useState(defaultCourses);
  const addCourse = (course) => {
    setCourses((prev) => [...prev, course]);
  };
  const removeCourse = (course) => {
    setCourses((prev) => prev.filter((item) => item !== course));
  };
  const value = {
    courses: courses,
    addCourse,
    removeCourse,
  };
  return <CoursesCtx.Provider value={value}>{children}</CoursesCtx.Provider>;
};

export default CoursesCtxProvider;
