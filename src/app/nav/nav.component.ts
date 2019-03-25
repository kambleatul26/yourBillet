import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { GlobalsService } from '../globals.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loginFlag = this.globalsService.loginFlag;

  constructor(private authService: AuthService, private globalsService: GlobalsService) { }

  onLogout() {
    this.authService.logout();
  }

  ngOnInit() {
  }

}
