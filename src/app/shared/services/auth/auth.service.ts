import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { URLS } from '../../urls/urls';
import { tap, switchMap } from 'rxjs/operators';
import { TokenRequest } from 'src/app/models/token.request';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUser: User;
  isAuthenticated$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  login({ login, password }: User) {
    this.http
      .post<TokenRequest>(URLS.LOGIN, { login, password })
      .pipe(
        tap(token => token),
        switchMap(token => this.http.post<User>(URLS.USER_INFO, token))
      )
      .subscribe(user => {
        this.loggedInUser = user;
        this.isAuthenticated$.next(true);
        this.router.navigateByUrl('courses');
      });
  }

  logout(): void {
    this.isAuthenticated$.next(false);
  }

  getAuthToken(): string {
    return this.loggedInUser ? this.loggedInUser.fakeToken : '';
  }

  getUserInfo(): User {
    return this.loggedInUser;
  }

  isAuthenticated(): boolean {
    return this.isAuthenticated$.value;
  }
}
