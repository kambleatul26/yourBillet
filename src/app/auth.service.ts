import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(authData: Login): void {
    this.http.post('', authData)
    .subscribe(res => {
      console.log(res);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', authData.email);
      localStorage.setItem('token', '');
    }, err => {
      console.log(err);
    });
  }

  logout(): void {
    this.http.post('', localStorage.getItem('user'))
    .subscribe(res => {
      console.log(res);
    });
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token');
  }

}
