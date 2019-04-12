import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackendService } from '../backend.service';

declare let $: any;

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  bookings;
  eventId;
  eventName;
  url;

  constructor(private backendService: BackendService) {
    $(document).ready(function() {
      $('.modal').modal({
          dismissible: true, // Modal can be dismissed by clicking outside of the modal
          onOpenEnd: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
          //  alert('Ready');
            // console.log(modal, trigger);
          },
          onCloseEnd: function() { // Callback for Modal close
            // alert('Closed');
          }
        }
      );
    });
  }

  qrCode(eid, ename, url) {
    this.eventId = eid;
    this.eventName = ename;
    this.url = url;
  }

  rating(eid, ename) {
    this.eventId = eid;
    this.eventName = ename;
  }

  rate(Form: NgForm) {
    if (Form.invalid) {
      return;
    } else {
      console.log(Form.value.rate);
      console.log(this.eventId);
    }
    this.backendService.rate(this.eventId, Form.value.rate);
  }

  ngOnInit() {
    $(document).ready(function() {
      $('.tabs').tabs();
    });

    this.backendService.bookings(localStorage.getItem('uniqueID')).subscribe(res => {
      this.bookings = res;
      console.log(res);
    });
  }

}
