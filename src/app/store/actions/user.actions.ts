import { Action } from '@ngrx/store';
import { User, LoginModel } from 'src/app/models/user';

export enum UserActions {
  LoginUser = '[User] Login User',
  LoginUserSuccess = '[User] Login User Success'
}

export class LoginUser implements Action {
  public readonly type = UserActions.LoginUser;
  constructor(public payload: LoginModel) {}
}

export class LoginUserSuccess implements Action {
  public readonly type = UserActions.LoginUserSuccess;
  constructor(public user: User) {}
}

export type UserActionTypes = LoginUser | LoginUserSuccess;
