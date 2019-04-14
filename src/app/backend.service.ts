import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  url = 'https://40801e14.ngrok.io/';

  regEvent(event) {
    this.http.post(this.url + 'event/create', event)
    .subscribe(res => {
      console.log(res);
    });
  }

  homeData() {
    return this.http.get('http://www.mocky.io/v2/5ca9dc4f370000220c492edc');
    // return this.http.get<HomeData[]>('/src/app/datahome.json');
  }

  allEvent() {
    return this.http.get(this.url + 'event');
  }

  organizerCustomers(id) {
    return this.http.get(this.url + 'event/stats/' + id);
  }

  organizerEvents(uniqueId) {
    return this.http.get(this.url + 'user/events/' + uniqueId);
  }

  revenue(uniqueId) {
    return this.http.get(this.url + 'event/revenue/' + uniqueId);
  }

  bookings(uniqueId) {
    return this.http.get(this.url + 'ticket/user/' + uniqueId);
  }

  bookTicket(type, quantity, eventId) {
    this.http.post(this.url + 'ticket/buy', {
      'eventId': Number(eventId),
      'userId': localStorage.getItem('uniqueID'),
      'type': Number(type),
      'quantity': quantity
    })
    .subscribe(res => {
      console.log(res);
    });
  }

  ticketPrice(eventid) {
    return this.http.get(this.url + '/' + eventid);
  }

  rate(id, num) {
    this.http.post(this.url + 'event/rating', {
      'eventId': id,
      'rating': Number(num)
    })
    .subscribe(res => {
      console.log(res);
    });
  }

  constructor(private http: HttpClient) { }
}


/*

POSTER
ORGANIZED RATINGS


SEARCH
POPULAR EVENTS HOME / ACTIVE & PAST

*/
