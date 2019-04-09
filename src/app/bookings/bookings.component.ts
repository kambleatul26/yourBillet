import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackendService } from '../backend.service';
import { BookingData } from '../bookingData';
import { Observable } from 'rxjs';

declare let $: any;

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  bookings: Observable<BookingData[]>;
  QR: string;

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
      $('.modal').modal();
    });

    $(document).ready(function() {
      $('.tabs').tabs();
    });

    this.bookings = this.backendService.bookings(localStorage.getItem('uniqueID'));
  }

}
