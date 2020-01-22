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
  DeleteCourseSuccess,
  CreateCourse,
  CreateCourseSuccess,
  EditCourse,
  EditCourseSuccess
} from '../actions/courses.actions';
import { map, switchMap, first, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

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
    ofType<GetCourses>(CoursesActions.GetCourses),
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
  createCourse$ = this.actions$.pipe(
    ofType<CreateCourse>(CoursesActions.CreateCourse),
    map(action => action.course),
    switchMap(course =>
      this.coursesService.createCourse(course).pipe(
        first(),
        map(_ => new CreateCourseSuccess())
      )
    )
  );

  @Effect({ dispatch: false })
  createCourseSuccess$ = this.actions$.pipe(
    ofType<CreateCourseSuccess>(CoursesActions.CreateCourseSuccess),
    tap(_ => this.router.navigateByUrl('courses'))
  );

  @Effect()
  editCourse$ = this.actions$.pipe(
    ofType<EditCourse>(CoursesActions.EditCourse),
    map(action => action.course),
    switchMap(course =>
      this.coursesService.updateCourse(course).pipe(
        first(),
        map(_ => new EditCourseSuccess())
      )
    )
  );

  @Effect({ dispatch: false })
  editCourseSuccess$ = this.actions$.pipe(
    ofType<EditCourseSuccess>(CoursesActions.EditCourseSuccess),
    tap(_ => this.router.navigateByUrl('courses'))
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

  @Effect()
  deleteCourseSuccess$ = this.actions$.pipe(
    ofType<DeleteCourseSuccess>(CoursesActions.DeleteCourseSuccess),
    map(_ => new GetCourses())
  );

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private router: Router
  ) {}
}
