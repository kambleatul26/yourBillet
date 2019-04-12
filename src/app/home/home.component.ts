import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';

declare let $: any;
declare var carousel: Function;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeEvent$;
  tmp;

  payment(id) {
    this.router.navigate(['/home/' + id]);
  }

  constructor(private router: Router, private backendService: BackendService) {
    $(document).ready(function() {
      $('.modal').modal({
          dismissible: true, // Modal can be dismissed by clicking outside of the modal
          onOpenEnd: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
           alert('Ready');
            console.log(modal, trigger);
          },
          onCloseEnd: function() { // Callback for Modal close
            alert('Closed');
          }
        }
      );
    });
  }

  ngOnInit() {
    function carousel() {
      $(document).ready(function() {
        $('.slider').slider({full_width: true});
      });
    }
    carousel();

    this.backendService.homeData().subscribe(res => {
      this.homeEvent$ = res;
    });
    this.backendService.tmp().subscribe(res => {
      this.tmp = res;
    });
  }

}
