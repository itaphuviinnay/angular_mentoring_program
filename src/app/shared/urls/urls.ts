const BASE_URL = 'http://localhost:3004';
const LOGIN = `${BASE_URL}/auth/login`;
const USER_INFO = `${BASE_URL}/auth/userinfo`;
const GET_COURSE_AUTHORS = `${BASE_URL}/authors`;
const ALL_COURSES = `${BASE_URL}/courses`;
const COURSES_PAGING = (start = 0, count = 5) =>
  `${ALL_COURSES}?start=${start}&count=${count}`;
const COURSES_SEARCH = (textFragment: string) =>
  `${ALL_COURSES}?textFragment=${textFragment}`;
const GET_COURSE_INFO = (courseId: number) => `${ALL_COURSES}/${courseId}`;
const CREATE_COURSE = ALL_COURSES;
const EDIT_COURSE = GET_COURSE_INFO;
const DELETE_COURSE = GET_COURSE_INFO;

export const URLS = {
  LOGIN,
  USER_INFO,
  GET_COURSE_AUTHORS,
  ALL_COURSES,
  COURSES_SEARCH,
  COURSES_PAGING,
  GET_COURSE_INFO,
  CREATE_COURSE,
  EDIT_COURSE,
  DELETE_COURSE
};
