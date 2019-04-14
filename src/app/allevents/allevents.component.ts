import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';

declare let $: any;

@Component({
  selector: 'app-allevents',
  templateUrl: './allevents.component.html',
  styleUrls: ['./allevents.component.css']
})
export class AlleventsComponent implements OnInit {

  allEvent$;

  constructor(private router: Router, private backendService: BackendService) { }

  payment(id) {
    this.router.navigate(['/dashboard/allevents/' + id]);
  }

  ngOnInit() {
    $(document).ready(function() {
      $('.tabs').tabs();
    });

    $(document).ready(function(){
      $('.collapsible').collapsible();
    });

    this.backendService.allEvent().subscribe(res => {
      this.allEvent$ = res;
    });
  }


}
