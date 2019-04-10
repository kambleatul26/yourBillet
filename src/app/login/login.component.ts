import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

import * as M from 'materialize-css/dist/js/materialize';
declare let $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  onLogin(Form: NgForm) {
    if (Form.invalid) {
      return;
    } else {
      const authData = {email: Form.value.username, password: Form.value.password};
      this.authService.login(authData);
      if (localStorage.getItem('isLoggedin') === 'true') {
        M.toast({html: 'LOGIN SUCCESS..!'});
      } else {
        M.toast({html: 'FALSE CREDENTIALS, Please try again.'});
      }
    }
  }

  onSignup(Form: NgForm) {
    if (Form.invalid) {
      return;
    } else {
      const signData = {name: Form.value.name, email: Form.value.username1, password: Form.value.password1, phone: Form.value.phone};
      const signFlag = this.authService.signup(signData);
      if (signFlag === true) {
        M.toast({html: 'SIGNED UP..!'});
      } else {
        M.toast({html: 'SOMETHING WRONG, Please try again.'});
      }
    }
  }

  ngOnInit() {
    $(document).ready(function() {
      $('.tabs').tabs();
    });
  }

}
