import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BackendService } from '../backend.service';

declare let $: any;
declare var carousel: Function;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public homeEvent = [];

  payment(id) {
    this.router.navigate(['/home/' + id]);
  }

  constructor(private router: Router, private backendService: BackendService, private http: HttpClient) {
  }

  ngOnInit() {
    function carousel() {
      $(document).ready(function() {
        $('.slider').slider({full_width: true});
      });
    }
    carousel();

    this.backendService.homeData().subscribe(data => this.homeEvent = data);
  }

}
