import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(authData: Login): void {
    this.http.post('https://1e57aa06.ngrok.io/user/login', authData)
    .subscribe(res => {
      if (res['code'] === 2) {
        console.log(res);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user', authData.email);
        localStorage.setItem('token', res['token']);
        console.log('Login successful');
      } else {
        console.log('Not Successful');
      }
    }, err => {
      console.log('Not Successful');
      console.log(err);
    });
  }

  signup(signData): void {
    this.http.post('https://1e57aa06.ngrok.io/user/signup', signData)
    .subscribe(res => {
      if (res['code'] === 2) {
        console.log(res);
        console.log('Signup successful');
      } else {
        console.log('Not Successful');
      }
    }, err => {
      console.log('Not Successful');
      console.log(err);
    });
  }

  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

}
