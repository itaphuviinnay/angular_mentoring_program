import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginModel } from 'src/app/models/user';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { LoginUser, UserActions } from 'src/app/store/actions/user.actions';
import { Actions, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private store: Store<AppState>,
    private action$: Actions,
    private router: Router
  ) {}

  ngOnInit() {
    this.action$
      .pipe(ofType(UserActions.LoginUserSuccess))
      .subscribe(_ => this.router.navigateByUrl('courses'));
    this.loginForm = new FormGroup({
      login: new FormControl('Morales', [Validators.required]),
      password: new FormControl('id', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10)
      ])
    });
  }

  onSubmit() {
    const userInfo: LoginModel = { ...this.loginForm.value };
    this.store.dispatch(new LoginUser(userInfo));
  }
}
