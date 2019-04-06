import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(authData: Login): void {
    this.http.post('https://ef31da43.ngrok.io/user/login', authData)
    .subscribe(res => {
      if (res['code'] === 2) {
        console.log(res);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user', authData.email);
        localStorage.setItem('token', res['token']);
        localStorage.setItem('uniqueID', res['user']['id']);
        console.log('Login successful');
        this.router.navigate(['/home']);
      } else {
        console.log('Not Successful');
      }
    }, err => {
      console.log('Not Successful');
      console.log(err);
    });
  }

  signup(signData): boolean {
    let flag = false;
    this.http.post('https://ef31da43.ngrok.io/user/signup', signData)
    .subscribe(res => {
      if (res['code'] === 2) {
        console.log(res);
        console.log('Signup successful');
        flag = true;
      } else {
        console.log('Not Successful');
      }
    }, err => {
      console.log('Not Successful');
      console.log(err);
    });
    return flag;
  }

  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('uniqueID');
    window.location.reload();
  }

}
