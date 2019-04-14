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
  eventReveName;

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
            this.eventRevenue = undefined;
            this.orgEvent = undefined;
          }
        }
      );
    });
  }

  ngOnInit() {
    $(document).ready(function() {
      $('.tabs').tabs();
    });

    this.backendService.organizerEvents(localStorage.getItem('uniqueID')).subscribe(res => {
      this.totalEvents = res;
      console.log(res);
    });
  }

  getStats(eid, ename) {
    this.backendService.organizerCustomers(eid).subscribe(res => {
      this.orgEvent = res;
    });
    this.eventReveName = ename;
  }

  getReve(eid, ename) {
    this.backendService.revenue(eid).subscribe(res => {
      this.eventRevenue = res;
      console.log(this.eventRevenue);
    });
    this.eventReveName = ename;
  }

}
