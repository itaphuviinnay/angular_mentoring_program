import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesState } from '../../state/courses.state';

export const coursesFeatureSelector = createFeatureSelector<CoursesState>(
  'courses'
);

export const coursesSelector = createSelector(
  coursesFeatureSelector,
  courseState => courseState.courses
);

export const courseDetailsSelector = (courseId: number) =>
  createSelector(coursesSelector, courses =>
    courses.find(course => course.id === courseId)
  );

export const totalCoursesCountSelector = createSelector(
  coursesFeatureSelector,
  courseState => courseState.totalCoursesCount
);

export const loadedCoursesCountSelector = createSelector(
  coursesFeatureSelector,
  courseState => courseState.coursesLoadedCount
);
