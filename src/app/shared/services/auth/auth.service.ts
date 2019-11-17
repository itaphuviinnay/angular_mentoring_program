import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated$ = new BehaviorSubject<boolean>(false);

  login(user: User) {
    localStorage.setItem('userInfo', JSON.stringify(user));
    this.isAuthenticated$.next(true);
  }

  logout() {
    localStorage.removeItem('userInfo');
    this.isAuthenticated$.next(false);
  }

  getUserInfo(): User {
    const userInfo = localStorage.getItem('userInfo');
    return userInfo ? JSON.parse(userInfo) : 'No user info found';
  }

  isAuthenticated() {
    return this.isAuthenticated$.value;
  }
}
