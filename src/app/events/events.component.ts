import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

declare let $: any;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  totalEvents;
  orgEvent;
  eventRevenue;

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    $(document).ready(function() {
      $('.modal').modal();
    });

    $(document).ready(function() {
      $('.tabs').tabs();
    });

    this.backendService.organizerEvents(localStorage.getItem('uniqueID')).subscribe(res => {
      this.totalEvents = res;
    });
  }

  getStats(id) {
    this.backendService.organizerCustomers(id).subscribe(res => {
      this.orgEvent = res;
    });
  }

  getReve(id) {
    this.backendService.revenue(id).subscribe(res => {
      this.eventRevenue = res;
      console.log(this.eventRevenue);
    });
  }

}
