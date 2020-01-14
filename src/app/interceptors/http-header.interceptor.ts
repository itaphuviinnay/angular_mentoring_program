import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserState } from '../store/state/user.state';
import { userAuthTokenSelector } from '../store/selectors/user';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {
  constructor(private store: Store<UserState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.store.select(userAuthTokenSelector).pipe(
      switchMap(token => {
        if (token) {
          const modifiedRequest = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`)
          });
          return next.handle(modifiedRequest);
        }
        return next.handle(req);
      })
    );
  }
}
