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

  constructor(private backendService: BackendService) { }

  rate(Form: NgForm, eventId) {
    if (Form.invalid) {
      return;
    } else {
      console.log(Form.value.rate);
    }
    this.backendService.rate(eventId, Form.value.rate);
  }

  ngOnInit() {
    $(document).ready(function() {
      $('.tabs').tabs();
    });
    $(document).ready(function() {
      $('.modal').modal();
    });

    this.backendService.bookings(localStorage.getItem('uniqueID')).subscribe(res => {
      this.bookings = res;
    });
  }

}
