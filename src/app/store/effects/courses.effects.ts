import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CoursesService } from 'src/app/shared/services/courses/courses.service';
import {
  CoursesActions,
  GetAllCoursesSuccess
} from '../actions/courses.actions';
import { map, exhaustMap } from 'rxjs/operators';

@Injectable()
export class CoursesEffects {
  // @Effect()
  getAllCourses = this.actions$.pipe(
    ofType(CoursesActions.GetAllCourses),
    exhaustMap(_ =>
      this.coursesService
        .getAllCourses()
        .pipe(map(courses => new GetAllCoursesSuccess(courses)))
    )
  );

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService
  ) {}
}
