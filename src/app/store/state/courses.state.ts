import { Course, CourseAuthor } from 'src/app/models/course';

export interface CoursesState {
  courses: Course[];
  totalCoursesCount: number;
  coursesLoadedCount: number;
  courseAuthors: CourseAuthor[];
}

export const initialCoursesState: CoursesState = {
  courses: [],
  totalCoursesCount: 0,
  coursesLoadedCount: 5,
  courseAuthors: []
};
