import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventData } from '../eventData';

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
  eventData: EventData;

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
      console.log(Form.value.ticket_type);
      console.log(Form.value.ticket_price);
      console.log(Form.value.ticket_desc);
      console.log(Form.value.ticket_avbl);
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
  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {  }
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
      $('.datepicker').datepicker();
    });

    $(document).ready(function() {
      $('.timepicker').timepicker();
    });

    $(document).ready(function() {
      $('select').formSelect();
    });
  }

}
