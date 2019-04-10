import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  url = 'https://571eddca.ngrok.io/';

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

  rate(id, num) {
    this.http.post(this.url + 'user/events/', {
      'id': id,
      'num': num
    })
    .subscribe(res => {
      console.log(res);
    });
  }

  tmp() {
    return this.http.get('http://www.mocky.io/v2/5cad8fff2f0000c82b3a95e1');
  }

  constructor(private http: HttpClient) { }
}


/*

TICKET PAGE (options)
PAYMENT redirect to TICKETs with success msg
MODAL ISSUE


RATE and INVOICE
POPULAR EVENTS HOME

STATS in MYEVENTS

*/
