import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import {
  UserActions,
  LoginUser,
  LoginUserSuccess
} from '../actions/user.actions';
import { map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  @Effect()
  loginUser$ = this.actions$.pipe(
    ofType<LoginUser>(UserActions.LoginUser),
    map(action => action.payload),
    switchMap(({ login, password }) =>
      this.authService.login({ login, password })
    ),
    switchMap(user => of(new LoginUserSuccess(user)))
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
