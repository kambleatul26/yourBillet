import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BackendService } from '../backend.service';

declare let $: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  param: string;
  divFlag = false;

  func() {
    if ($('input[name=group1]:checked').length > 0) {
      console.log('checked');
      this.divFlag = true;
    } else {
      this.divFlag = false;
    }
    console.log(this.divFlag);
  }

  tickets(Form: NgForm) {
    if (Form.invalid) {
      return;
    } else {
      console.log(Form.value.group1);
      console.log(Form.value.quantity);
      console.log(this.param);
      this.backendService.bookTicket(Form.value.group1, Form.value.quantity, this.param);
    }
  }

  constructor(private activatedRoute: ActivatedRoute, private backendService: BackendService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.param = params.get('eventName');
      console.log(params.get('eventName'));
    });
  }

}
