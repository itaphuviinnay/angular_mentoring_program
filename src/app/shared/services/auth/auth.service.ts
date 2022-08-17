import { Injectable } from '@angular/core';
import { User, LoginModel } from 'src/app/models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { URLS } from '../../urls/urls';
import { switchMap } from 'rxjs/operators';
import { TokenRequest } from 'src/app/models/token.request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login({ login, password }: LoginModel): Observable<User> {
    return this.http
      .post<TokenRequest>(URLS.LOGIN, { login, password })
      .pipe(switchMap(token => this.http.post<User>(URLS.USER_INFO, token)));
  }
}
