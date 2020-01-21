import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { isUserAuthenticatedSelector } from 'src/app/store/selectors/user';
import { AppState } from 'src/app/store/state/app.state';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>) {}

  canActivate(): Observable<boolean> {
    return this.store.select(isUserAuthenticatedSelector);
  }
}
