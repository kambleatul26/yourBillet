import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../backend.service';
import { InteractionService } from '../interaction.service';

import * as M from 'materialize-css/dist/js/materialize';

declare let $: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  param: string;
  eventName: string;
  divFlag = false;
  prices;
  type;
  quantity;

  getRandomPrice(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  func() {
    if ($('input[name=group1]:checked').length > 0) {
      console.log('checked');
      this.divFlag = true;
    } else {
      this.divFlag = false;
    }
    console.log(this.divFlag);
  }

  tickets(typeNum) {
    console.log(typeNum);
    console.log(this.quantity);
    this.backendService.bookTicket(typeNum, this.quantity, this.param);
  }

  toastFunc1() {
    M.toast({html: '23 Tickets Available', classes: 'rounded', outDuration: '1000'});
  }

  toastFunc2() {
    M.toast({html: '743 Tickets Available', classes: 'rounded', outDuration: '1000'});
  }

  toastFunc3() {
    M.toast({html: '5 Tickets Available', classes: 'rounded', outDuration: '1000'});
  }

  constructor(private activatedRoute: ActivatedRoute, private backendService: BackendService,
              private interactionService: InteractionService) { }

  ngOnInit() {
    $(document).ready(function() {
      $('.tap-target').tapTarget();
    });

    $(document).ready(function(){
      $('.collapsible').collapsible();
    });

    this.interactionService.eventName$
    .subscribe(ename => {
      this.eventName = ename;
      console.log(this.eventName);
    });
    this.activatedRoute.paramMap.subscribe(params => {
      this.param = params.get('eventName');
      console.log(params.get('eventName'));
    });
    this.backendService.ticketPrice(this.param).subscribe(res => {
      this.prices = res;
    });
  }

}
