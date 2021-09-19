import { Component, OnInit } from '@angular/core';
import { PagesDataService } from 'src/app/core/services/pages-data.service';
import { getNextOrderNum } from '../../services/counter';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  isDetailes: boolean = false;

  orderNum = getNextOrderNum();

  constructor(
    private readonly pagesDataService: PagesDataService
  ) { }

  ngOnInit(): void {
    console.log(this.orderedItems)
  }

  get orderedItems() {
    return this.pagesDataService.orderedItems;
  }

  onDetailesBtnClick() {
    this.isDetailes = !this.isDetailes;
  }

  getTotalSum(price: number, quantity: number = 1) {
    return price * quantity;
  }

}
