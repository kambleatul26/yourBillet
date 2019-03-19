import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  onLogin(Form: NgForm) {
    if (Form.invalid) {
      return;
    } else {
      const authData = {password: Form.value.password, username: Form.value.username};
      // this.http.post('http://localhost:3000/login', authData)
      // .subscribe(res => {
      //   console.log(res);
      // });
      console.log('Login successful');
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('token', '');
    }
  }

  ngOnInit() {
  }

}
