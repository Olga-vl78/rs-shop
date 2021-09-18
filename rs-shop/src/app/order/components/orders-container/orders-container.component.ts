import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-container',
  templateUrl: './orders-container.component.html',
  styleUrls: ['./orders-container.component.scss']
})
export class OrdersContainerComponent implements OnInit {
  isCheckout: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onCheckoutBtnClick() {
    this.isCheckout = true;
  }

}
