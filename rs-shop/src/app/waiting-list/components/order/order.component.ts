import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/core/services/backend.service';
import { PagesDataService } from 'src/app/core/services/pages-data.service';
import { IGoodsItem } from 'src/app/shared/models/goods-item.model';
import { IUserOrderItem } from 'src/app/user/models/user-order-item.model';
import { IUserOrder } from 'src/app/user/models/user-order.model';
import { UserService } from 'src/app/user/services/user.service';
import { getNextOrderNum } from '../../services/counter';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  isDetailes: boolean = false;

  orderNum = getNextOrderNum();

  orders: any = [];


  constructor(
    private readonly pagesDataService: PagesDataService,
    private readonly userService: UserService,
    private readonly backendService: BackendService
  ) { }

  ngOnInit(): void {
    this.getOrders();
  }

  get orderedItems() {
    return this.pagesDataService.orderedItems;
  }

  getOrders() {
    this.userService.getUserInfo()
      .then((ordersData) => {
        const userOrdersData: any = ordersData;
        const orders = userOrdersData.orders;
        console.log("orders", orders)
        const newOrders = orders.map((order: IUserOrder) => this.transformOrder(order));
        console.log('newOrders', newOrders)
        this.orders = newOrders;
        return this.orders;
      })
  }

  transformOrder(order: IUserOrder) {
    const items: IGoodsItem[] = [];
    order.items.forEach((item: IUserOrderItem) => {
      this.backendService.fetchItem(item.id)
        .then((elem: IGoodsItem) => {
          elem.amount = item.amount;
          items.push(elem);
        })
    })
    const newOrder = {
      ...order,
      items: items,
    }
    console.log(newOrder);
    return newOrder;
  }

  onDetailesBtnClick() {
    this.isDetailes = !this.isDetailes;
  }

  getTotalSum(price: number, quantity: number = 1) {
    return price * quantity;
  }

  onDeleteBtnClick(id: string) {
    this.userService.deleteOrder(id);
    this.getOrders();
  }

}
