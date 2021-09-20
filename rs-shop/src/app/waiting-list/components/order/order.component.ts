import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/core/services/backend.service';
import { PagesDataService } from 'src/app/core/services/pages-data.service';
import { IGoodsItem } from 'src/app/shared/models/goods-item.model';
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

  orders: IUserOrder[] = [];


  constructor(
    private readonly pagesDataService: PagesDataService,
    private readonly userService: UserService,
    private readonly backendService: BackendService
  ) {

  }

  ngOnInit(): void {
    this.userService.getUserInfo()
      .then((ordersData) => {
        const userOrdersData: any = ordersData;
        const orders = userOrdersData.orders;
        console.log("orders", orders)
        this.orders = orders;
        return this.orders;
      })


    // .then((orders) => {
    //   const fullOrders: any = [];
    //   orders.forEach((order) => fullOrders.push(this.transformOrder(order)));
    //   // this.fullOrders = fullOrders;
    //   // console.log('this.fullOrders', this.fullOrders)
    //   // return this.fullOrders;
    //   this.$fullOrders.next(fullOrders);
    // })
  }

  get orderedItems() {
    return this.pagesDataService.orderedItems;
  }

  transformOrder(order: IUserOrder) {
    const items: IGoodsItem[] = [];
    order.items.forEach((item) => {
      this.backendService.fetchItem(item.id)
        .then((elem) => {
          elem.amount = item.amount;
          items.push(elem);
        })
    })
    const newOrder = {
      items: items,
      detailes: order.details,
      id: order.id,
    }
    console.log(items);
    return newOrder;
  }

  onDetailesBtnClick() {
    this.isDetailes = !this.isDetailes;
  }

  getTotalSum(price: number, quantity: number = 1) {
    return price * quantity;
  }

}
