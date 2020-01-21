import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CoursesService } from 'src/app/shared/services/courses/courses.service';
import {
  CoursesActions,
  GetAllCoursesSuccess,
  GetAllCourses,
  GetCourses,
  GetCoursesSuccess,
  SearchCourses,
  LoadMoreCourses,
  SearchCoursesSuccess,
  DeleteCourse,
  DeleteCourseSuccess
} from '../actions/courses.actions';
import { map, switchMap, first } from 'rxjs/operators';

@Injectable()
export class CoursesEffects {
  @Effect()
  getAllCourses$ = this.actions$.pipe(
    ofType<GetAllCourses>(CoursesActions.GetAllCourses),
    switchMap(_ =>
      this.coursesService.getAllCourses().pipe(
        first(),
        map(courses => new GetAllCoursesSuccess(courses))
      )
    )
  );

  @Effect()
  getCourses$ = this.actions$.pipe(
    ofType<GetCourses>(
      CoursesActions.GetCourses,
      CoursesActions.DeleteCourseSuccess
    ),
    switchMap(_ =>
      this.coursesService.getCourses().pipe(
        first(),
        map(courses => new GetCoursesSuccess(courses))
      )
    )
  );

  @Effect()
  searchCourses$ = this.actions$.pipe(
    ofType<SearchCourses>(CoursesActions.SearchCourses),
    map(action => action.searchText),
    switchMap(searchInput =>
      this.coursesService.searchCourses(searchInput).pipe(
        first(),
        map(courses => new SearchCoursesSuccess(courses))
      )
    )
  );

  @Effect()
  loadMoreCourses$ = this.actions$.pipe(
    ofType<LoadMoreCourses>(CoursesActions.LoadMoreCourses),
    switchMap(_ =>
      this.coursesService.loadMoreCourses().pipe(
        first(),
        map(courses => new GetCoursesSuccess(courses))
      )
    )
  );

  @Effect()
  deleteCourse$ = this.actions$.pipe(
    ofType<DeleteCourse>(CoursesActions.DeleteCourse),
    map(action => action.courseId),
    switchMap((courseId: number) =>
      this.coursesService.deleteCourse(courseId).pipe(
        first(),
        map(_ => new DeleteCourseSuccess())
      )
    )
  );

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService
  ) {}
}
