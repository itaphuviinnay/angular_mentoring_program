import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Store } from '@ngrx/store';
import { isUserAuthenticatedSelector, userSelector } from '../store/selectors/user';
import { combineLatest } from 'rxjs';
import { LogOffUser } from '../store/actions/user.actions';
import { AppState } from '../store/state/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;
  userInfo: User;

  constructor(private store: Store<AppState>) {}

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
    this.store.dispatch(new LogOffUser());
  }
}
