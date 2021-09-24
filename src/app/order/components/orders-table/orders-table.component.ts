import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/core/services/backend.service';
import { PagesDataService } from 'src/app/core/services/pages-data.service';
import { IGoodsItem } from 'src/app/shared/models/goods-item.model';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss'],
})
export class OrdersTableComponent implements OnInit {
  items: IGoodsItem[] = [];

  item: IGoodsItem | undefined = undefined;

  orderSum: number = 0;

  isEmpty: boolean = true;

  constructor(
    private readonly pagesDataService: PagesDataService,
    private readonly backendService: BackendService,
    private readonly router: Router,
  ) {}

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

  onAmountInputChange(amount: string, id: string) {
    if (id) this.pagesDataService.updateOrderedItems(+amount, id);
  }

  getOrderSum() {
    let priceSum: number = 0;
    this.items.forEach((item) => (priceSum += +item.price));
    return priceSum;
  }

  updateOrderSum() {
    let priceSum: number = 0;
    this.orderedItems.forEach((item) => {
      if (item.amount) priceSum += +item.price * item?.amount;
    });
    return priceSum;
  }

  addOrderQuantity(input: HTMLInputElement, itemId: string) {
    let counter: number = +input.value;
    counter += 1;
    input.value = counter.toString();
    this.onAmountInputChange(input.value, itemId);
    this.orderSum = this.updateOrderSum();
    return input.value;
  }

  reduceOrderQuantity(input: HTMLInputElement, itemId: string) {
    let counter: number = +input.value;
    counter -= 1;
    if (counter < 0) counter = 0;
    input.value = counter.toString();
    this.onAmountInputChange(input.value, itemId);
    this.orderSum = this.updateOrderSum();
    return input.value;
  }

  getTotalPrice(price: number, quantity: string) {
    return price * +quantity;
  }

  checkItems() {
    if (this.items.length === 0) this.isEmpty = true;
    else this.isEmpty = false;
  }

  onDeleteBtnClick(itemId: string | undefined) {
    const items = this.pagesDataService.orderedItems;
    if (itemId) {
      const index = items.findIndex((item) => item.id === itemId);
      if (index > -1) {
        items.splice(index, 1);
      }
    }
  }

  goToItemDetailedPage(itemId: string | undefined) {
    if (itemId) {
      this.backendService.fetchItem(itemId).then((item) => {
        this.router.navigate([`/categories/${item.category}/${item.subCategory}/${itemId}`]);
      });
    }
  }
}
