import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loginFlag: string;

  constructor(private authService: AuthService, private http: HttpClient, private router: Router) { }

  onLogout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.loginFlag = localStorage.getItem('isLoggedIn');
    // console.log(this.loginFlag);
    if (this.loginFlag === 'true') {
      this.http.post('https://1e57aa06.ngrok.io/user/verify', 'token')
      .subscribe(res => {
        console.log(res);
        // if no token then redirect to login
      });
    }
  }

}
