import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService) {}

  ngOnInit() {
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
    const userInfo: User = { ...this.loginForm.value };
    this.authService.login(userInfo);
  }
}
