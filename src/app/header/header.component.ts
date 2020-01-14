import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth/auth.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserState } from '../store/state/user.state';
import {
  isUserAuthenticatedSelector,
  userSelector
} from '../store/selectors/user';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false;
  userInfo: User;

  constructor(private store: Store<UserState>, private router: Router) {}

  ngOnInit() {
    combineLatest([
      this.store.select(userSelector),
      this.store.select(isUserAuthenticatedSelector)
    ]).subscribe(([user, isAuthenticated]) => {
      this.userInfo = user;
      this.isAuthenticated = isAuthenticated;
    });
  }

  logout() {
    this.router.navigateByUrl('');
  }
}
