import { initialCoursesState, CoursesState } from '../state/courses.state';
import { CoursesActionTypes, CoursesActions } from '../actions/courses.actions';

export const coursesReducer = (
  state = initialCoursesState,
  action: CoursesActionTypes
): CoursesState => {
  switch (action.type) {
    case CoursesActions.GetAllCoursesSuccess:
      return {
        ...state,
        totalCoursesCount: action.courses.length,
        coursesLoadedCount: 5
      };
    case CoursesActions.GetCoursesSuccess:
    case CoursesActions.SearchCoursesSuccess:
      return {
        ...state,
        courses: action.courses
      };
    case CoursesActions.LoadMoreCourses:
      return {
        ...state,
        coursesLoadedCount: state.coursesLoadedCount + 5
      };
    default:
      return state;
  }
};
