import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'https://40801e14.ngrok.io/';

  constructor(private http: HttpClient, private router: Router) { }

  login(authData: Login): void {
    this.http.post(this.url + 'user/login', authData)
    .subscribe(res => {
        console.log(res);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user', authData.email);
        localStorage.setItem('token', res['token']);
        localStorage.setItem('uniqueID', res['user']['id']);
        console.log('Login successful');
        this.router.navigate(['/home']);
        window.location.reload();
    }, err => {
      console.log('Not Successful');
      console.log(err);
    });
  }

  signup(signData): boolean {
    let flag = false;
    this.http.post(this.url + 'user/signup', signData)
    .subscribe(res => {
        console.log(res);
        console.log('Signup successful');
        flag = true;
    }, err => {
      flag = false;
      console.log('Not Successful');
      console.log(err);
    });
    console.log(flag);
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
