import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth/auth.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.isAuthenticated$.subscribe(
      isAuthenticated => (this.isAuthenticated = isAuthenticated)
    );
  }

  getUserInfo() {
    const user: User = this.authService.getUserInfo();
    console.log('UserInfo', user);
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('');
  }
}
