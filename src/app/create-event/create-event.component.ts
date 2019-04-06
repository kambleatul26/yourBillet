import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackendService } from '../backend.service';

import { MapsAPILoader } from '@agm/core';
import { ViewChild, ElementRef, NgZone, } from '@angular/core';

import { GooglePlaceDirective } from 'ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

declare let $: any;

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  isLinear = false;

  date1;
  time;

  // lat = 19.2781;
  // lng = 72.8668;

  lat = -33.785809;
  lng = 151.121195;

  eventFunc(Form: NgForm) {
    if (Form.invalid) {
      return;
    } else {
      this.date1 = $('.datepicker').val();
      this.time = $('.timepicker').val();
      console.log(Form.value.event_name);
      console.log(this.date1);
      console.log(this.time);
      console.log(Form.value.addres);
      console.log(Form.value.description);
      console.log(Form.value.category);
      console.log(Form.value.tags);
      console.log(Form.value.ticket_desc);
      const prices = [Form.value.ticket_price1, Form.value.ticket_price2, Form.value.ticket_price3];
      console.log(prices);
      const quantity = [Form.value.ticket_avbl1, Form.value.ticket_avbl2, Form.value.ticket_avbl3];
      console.log(quantity);
      const image = [Form.value.image1, Form.value.image2, Form.value.image3];
      console.log(image);

      const event = {
          'name': Form.value.event_name,
          'date': this.date1,
          'lat': this.lat,
          'long': this.lng,
          'description': Form.value.description,
          'venue': Form.value.addres,
          'time': this.time,
          'userId': Number(localStorage.getItem('uniqueID')),
          'tags': Form.value.tags,
          'category': Form.value.category,
          'photos': image,
          'ticket': {
            'price': prices,
            'quantity': quantity,
            'description' : Form.value.ticket_desc,
          },

        };

      this.backendService.regEvent(event);

    }
  }

  placeMarker($event) {
    console.log($event.coords.lat);
    console.log($event.coords.lng);
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
  }

  @ViewChild('places') places: GooglePlaceDirective;
  @ViewChild('search' ) public searchElement: ElementRef;
  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private backendService: BackendService) {  }
  public handleAddressChange(address: Address) {
      console.log(address.geometry.location.lng());
      console.log(address.geometry.location.lat());
      console.log(address.geometry.location.toJSON());
      console.log(address.geometry.viewport.getNorthEast());
      this.lng = address.geometry.location.lng();
      this.lat  = address.geometry.location.lat();
  }
  ngOnInit() {
    $(document).ready( function() {
      $('.datepicker').datepicker({
        format: 'yyyy-mm-dd',
      });
    });

    $(document).ready(function() {
      $('.timepicker').timepicker();
    });

    $(document).ready(function() {
      $('select').formSelect();
    });
  }

}
