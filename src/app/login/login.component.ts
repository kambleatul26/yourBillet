import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  onLogin(Form: NgForm) {
    console.log('hi');
    if (Form.invalid) {
      return;
    } else {
      const authData = {email: Form.value.username, password: Form.value.password};
      this.authService.login(authData);
      console.log(authData);
    }
  }

  onSignup(Form: NgForm) {
    if (Form.invalid) {
      return;
    } else {
      const signData = {name: Form.value.name, email: Form.value.username, password: Form.value.password, phone: Form.value.phone};
      this.authService.signup(signData);
      console.log(signData);
    }
  }

  ngOnInit() {
  }

}
