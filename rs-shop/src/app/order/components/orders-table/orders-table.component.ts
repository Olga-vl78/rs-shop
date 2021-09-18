import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/core/services/backend.service';
import { PagesDataService } from 'src/app/core/services/pages-data.service';
import { IGoodsItem } from 'src/app/shared/models/goods-item.model';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss']
})
export class OrdersTableComponent implements OnInit {
  items: IGoodsItem[] = [];

  item: IGoodsItem | undefined = undefined;

  orderSum: number = 0;

  isEmpty: boolean = true;

  constructor(
    private readonly pagesDataService: PagesDataService,
    private readonly backendService: BackendService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.items = this.orderedItems;
    this.checkItems();
    this.orderSum = this.getOrderSum();
  }

  get orderedItems() {
    return this.pagesDataService.orderedItems;
  }

  getImageUrl(item: IGoodsItem) {
    return item.imageUrls[0];
  }

  getOrderSum() {
    let priceSum: number = 0;
    this.items.forEach((item) => priceSum += (+item.price));
    return priceSum;
  }

  updateOrderSum() {
  }

  addOrderQuantity(input: HTMLInputElement) {
    let counter: number = +input.value;
    counter++;
    return input.value = counter.toString();
  }

  reduceOrderQuantity(input: HTMLInputElement) {
    let counter: number = +input.value;
    counter--;
    if (counter < 0) counter = 0;
    return input.value = counter.toString();
  }

  getTotalPrice(price: number, quantity: string) {
    return price * +quantity;
  }

  checkItems() {
    if (this.items.length === 0) this.isEmpty = true;
    else this.isEmpty = false;
  }

  goToItemDetailedPage(itemId: string | undefined) {
    if (itemId) {
      this.backendService.fetchItem(itemId)
        .then((item) => {
          this.router.navigate([`/categories/${item.category}/${item.subCategory}/${itemId}`])
        })
    }
  }
}
