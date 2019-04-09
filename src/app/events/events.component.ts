import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { OrgCusData } from '../orgCusData';
import { OrgTotalEvents } from '../orgTotalEvents';
import { EventRevenueData } from '../eventRevenueData';
import { Observable } from 'rxjs';

declare let $: any;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  totalEvents: Observable<OrgTotalEvents[]>;
  orgEvent: Observable<OrgCusData[]>;
  eventRevenue: Observable<EventRevenueData[]>;

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    $(document).ready(function() {
      $('.modal').modal();
    });

    $(document).ready(function() {
      $('.tabs').tabs();
    });

    this.totalEvents = this.backendService.organizerEvents(localStorage.getItem('uniqueID'));
  }

  getStats(id) {
    this.orgEvent = this.backendService.organizerCustomers(id);
  }

  getReve(id) {
    this.eventRevenue = this.backendService.revenue(id);
  }

}
