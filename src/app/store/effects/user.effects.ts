import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import {
  UserActions,
  LoginUser,
  LoginUserSuccess
} from '../actions/user.actions';
import { map, switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {
  @Effect()
  loginUser$ = this.actions$.pipe(
    ofType<LoginUser>(UserActions.LoginUser),
    map(action => action.payload),
    switchMap(({ login, password }) => {
      console.log('===>', login, password);
      return this.authService
        .login({ login, password })
        .pipe(
          tap(_ => console.log('''))
          map(user => new LoginUserSuccess(user))
        );
    })
  );

  @Effect({ dispatch: false })
  loginUserSuccess$ = this.actions$.pipe(
    ofType<LoginUserSuccess>(UserActions.LoginUserSuccess),
    tap(_ => {
      this.router.navigateByUrl('courses');
    })
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
