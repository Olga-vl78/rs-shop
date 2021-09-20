import { Component, OnInit } from '@angular/core';
import { PagesDataService } from 'src/app/core/services/pages-data.service';

@Component({
  selector: 'app-orders-container',
  templateUrl: './orders-container.component.html',
  styleUrls: ['./orders-container.component.scss']
})
export class OrdersContainerComponent implements OnInit {
  isCheckout: boolean = false;

  isEmpty: boolean = true;

  constructor(
    private readonly pagesDataService: PagesDataService
  ) { }

  ngOnInit(): void {
    this.checkOrderedItems();
  }

  get orderedItems() {
    return this.pagesDataService.orderedItems;
  }

  onCheckoutBtnClick() {
    this.isCheckout = true;
  }

  checkOrderedItems() {
    if (this.orderedItems.length === 0) this.isEmpty = true;
    else this.isEmpty = false;
  }

}
