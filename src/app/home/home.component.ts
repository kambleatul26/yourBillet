import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';
import { HomeData } from '../homeData';
import { Observable } from 'rxjs';

declare let $: any;
declare var carousel: Function;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeEvent$: Observable<HomeData[]>;

  payment(id) {
    this.router.navigate(['/home/' + id]);
  }

  constructor(private router: Router, private backendService: BackendService) {
  }

  ngOnInit() {
    function carousel() {
      $(document).ready(function() {
        $('.slider').slider({full_width: true});
      });
    }
    carousel();

    this.homeEvent$ = this.backendService.homeData();
  }

}
