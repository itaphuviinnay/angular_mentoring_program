import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserState } from '../store/state/user.state';
import { isUserAuthenticatedSelector } from '../store/selectors/user';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(private store: Store<UserState>) {}

  ngOnInit() {
    this.store
      .select(isUserAuthenticatedSelector)
      .subscribe(isAuthenticated => (this.isAuthenticated = isAuthenticated));
  }
}
