import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/core/services/backend.service';
import { PagesDataService } from 'src/app/core/services/pages-data.service';
import { IGoodsItem } from 'src/app/shared/models/goods-item.model';
import { IHandledUserOrder } from 'src/app/user/models/handled-user-order.model';
import { IUserOrderItem } from 'src/app/user/models/user-order-item.model';
import { IUserOrder } from 'src/app/user/models/user-order.model';
import { UserService } from 'src/app/user/services/user.service';
import { getNextOrderNum } from '../../services/counter';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  isDetailes: boolean = false;

  orderNum = getNextOrderNum();

  orders: any = [];

  constructor(
    private readonly pagesDataService: PagesDataService,
    private readonly userService: UserService,
    private readonly backendService: BackendService,
  ) {}

  ngOnInit(): void {
    this.getOrders();
  }

  get orderedItems() {
    return this.pagesDataService.orderedItems;
  }

  get isEditMode() {
    return this.pagesDataService.isEditMode;
  }

  getOrders() {
    this.userService.getUserInfo().then((ordersData) => {
      const userOrdersData: any = ordersData;
      const orders = userOrdersData.orders;
      const newOrders = orders.map((order: IUserOrder) => this.transformOrder(order));
      this.orders = newOrders;
      return this.orders;
    });
  }

  transformOrder(order: IUserOrder) {
    const items: IGoodsItem[] = [];
    order.items.forEach((item: IUserOrderItem) => {
      this.backendService.fetchItem(item.id).then((elem: IGoodsItem) => {
        elem.amount = item.amount;
        items.push(elem);
      });
    });
    const newOrder = {
      ...order,
      items: items,
    };
    return newOrder;
  }

  onDetailesBtnClick() {
    this.isDetailes = !this.isDetailes;
  }

  onDeleteBtnClick(id: string) {
    this.userService.deleteOrder(id)
    .then(() => this.getOrders());
  }

  onEditBtnClick(order: IUserOrder) {
    this.pagesDataService.currentOrder = order;
    this.pagesDataService.isEditMode = true;
  }

  onSubmitOrder(isSubmitted: boolean) {
    if (isSubmitted) this.getOrders();
  }

  getSum(price: number, quantity: number = 1) {
    return price * quantity;
  }

  getTotalOrderSum(order: IHandledUserOrder) {
    let orderSum: number = 0;
    order.items.forEach((item) => {
      if (item.amount) orderSum += item?.amount * item.price;
    });
    return orderSum;
  }
}
