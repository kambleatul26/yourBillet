import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  isLinear = false;

  lat = 19.2781;
  lng = 72.8668;

  placeMarker($event) {
    console.log($event.coords.lat);
    console.log($event.coords.lng);
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
  }

  constructor() {}

  ngOnInit() {
  }

}
