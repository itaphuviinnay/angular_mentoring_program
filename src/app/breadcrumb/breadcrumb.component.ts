import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { isUserAuthenticatedSelector } from '../store/selectors/user';
import { AppState } from '../store/state/app.state';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  isAuthenticated = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store
      .select(isUserAuthenticatedSelector)
      .subscribe(isAuthenticated => (this.isAuthenticated = isAuthenticated));
  }
}
