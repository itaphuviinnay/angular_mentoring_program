import { Action } from '@ngrx/store';
import { Course, CourseAuthor } from 'src/app/models/course';

export enum CoursesActions {
  GetAllCourses = '[Courses] Get All Courses',
  GetAllCoursesSuccess = '[Courses] Get All Courses Success',
  GetAllCourseAuthors = '[Authors] Get All Course Authors',
  GetAllCourseAuthorsSuccess = '[Authors] Get All Course Authors Success',
  GetCourses = '[Courses] Get Courses',
  GetCoursesSuccess = '[Courses] Get Courses Success',
  SearchCourses = '[Courses] Search Courses',
  SearchCoursesSuccess = '[Courses] Search Courses Success',
  LoadMoreCourses = '[Courses] Load More Courses',
  LoadMoreCoursesSuccess = '[Courses] Load More Courses Success',
  GetCourseDetails = '[Courses] Get Course Details',
  GetCourseDetailsSuccess = '[Courses] Get Course Details Success',
  CreateCourse = '[Courses] Create Course',
  CreateCourseSuccess = '[Courses] Create Course Success',
  EditCourse = '[Courses] Edit Course',
  EditCourseSuccess = '[Courses] Edit Course Success',
  DeleteCourse = '[Courses] Delete Course',
  DeleteCourseSuccess = '[Courses] Delete Course Success'
}

export class GetAllCourses implements Action {
  public readonly type = CoursesActions.GetAllCourses;
}

export class GetAllCoursesSuccess implements Action {
  public readonly type = CoursesActions.GetAllCoursesSuccess;
  constructor(public courses: Course[]) {}
}

export class GetAllCourseAuthors implements Action {
  public readonly type = CoursesActions.GetAllCourseAuthors;
}

export class GetAllCourseAuthorSuccess implements Action {
  public readonly type = CoursesActions.GetAllCourseAuthorsSuccess;
  constructor(public authors: CourseAuthor[]) {}
}

export class GetCourses implements Action {
  public readonly type = CoursesActions.GetCourses;
}

export class GetCoursesSuccess implements Action {
  public readonly type = CoursesActions.GetCoursesSuccess;
  constructor(public courses: Course[]) {}
}

export class SearchCourses implements Action {
  public readonly type = CoursesActions.SearchCourses;
  constructor(public searchText: string) {}
}

export class SearchCoursesSuccess implements Action {
  public readonly type = CoursesActions.SearchCoursesSuccess;
  constructor(public courses: Course[]) {}
}

export class LoadMoreCourses implements Action {
  public readonly type = CoursesActions.LoadMoreCourses;
}

export class LoadMoreCoursesSuccess implements Action {
  public readonly type = CoursesActions.LoadMoreCoursesSuccess;
  constructor(public courses: Course[]) {}
}

export class GetCourseDetails implements Action {
  public readonly type = CoursesActions.GetCourseDetails;
  constructor(public courseId: number) {}
}

export class GetCourseDetailsSuccess implements Action {
  public readonly type = CoursesActions.GetCourseDetailsSuccess;
  constructor(public course: Course) {}
}

export class CreateCourse implements Action {
  public readonly type = CoursesActions.CreateCourse;
  constructor(public course: Course) {}
}

export class CreateCourseSuccess implements Action {
  public readonly type = CoursesActions.CreateCourseSuccess;
}

export class EditCourse implements Action {
  public readonly type = CoursesActions.EditCourse;
  constructor(public course: Course) {}
}

export class EditCourseSuccess implements Action {
  public readonly type = CoursesActions.EditCourseSuccess;
}

export class DeleteCourse implements Action {
  public readonly type = CoursesActions.DeleteCourse;
  constructor(public courseId: number) {}
}

export class DeleteCourseSuccess implements Action {
  public readonly type = CoursesActions.DeleteCourseSuccess;
}

export type CoursesActionTypes =
  | GetAllCourses
  | GetAllCoursesSuccess
  | GetAllCourseAuthors
  | GetAllCourseAuthorSuccess
  | GetCourses
  | GetCoursesSuccess
  | SearchCourses
  | SearchCoursesSuccess
  | LoadMoreCourses
  | LoadMoreCoursesSuccess
  | GetCourseDetails
  | GetCourseDetailsSuccess
  | CreateCourse
  | CreateCourseSuccess
  | EditCourse
  | EditCourseSuccess
  | DeleteCourse
  | DeleteCourseSuccess;
