import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { isUserAuthenticatedSelector } from 'src/app/store/selectors/user';
import { AppState } from 'src/app/store/state/app.state';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select(isUserAuthenticatedSelector).pipe(
      tap(isAuthenticated => {
        if (!isAuthenticated) {
          this.router.navigateByUrl('');
        }
        return isAuthenticated;
      })
    );
  }
}
