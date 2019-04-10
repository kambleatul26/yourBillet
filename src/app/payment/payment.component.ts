import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.param = params.get('eventName');
      console.log(params.get('eventName'));
    });
  }

}
