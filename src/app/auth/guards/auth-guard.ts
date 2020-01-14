import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { UserState } from 'src/app/store/state/user.state';
import { isUserAuthenticatedSelector } from 'src/app/store/selectors/user';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<UserState>, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select(isUserAuthenticatedSelector);
  }
}
