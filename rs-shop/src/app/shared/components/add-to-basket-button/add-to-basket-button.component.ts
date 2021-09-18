import { Component, Input, OnInit } from '@angular/core';
import { PagesDataService } from 'src/app/core/services/pages-data.service';

@Component({
  selector: 'app-add-to-basket-button',
  templateUrl: './add-to-basket-button.component.html',
  styleUrls: ['./add-to-basket-button.component.scss']
})
export class AddToBasketButtonComponent implements OnInit {
  @Input() itemId: string | undefined = '';

  isOrdered: boolean = false;

  constructor(
    private readonly pagesDataService: PagesDataService
  ) { }

  ngOnInit(): void {
    this.checkOrderedItems();
  }

  onBasketBtnClick(id: string | undefined) {
    if (id) {
      this.pagesDataService.addToOrderedItems(id);
      this.isOrdered = true;
    }
  }

  checkOrderedItems() {
    const orderedItem = this.orderedItems.find((item) => item.id === this.itemId);
    if (orderedItem) {
      this.isOrdered = true;
    } else this.isOrdered = false;
  }

  get orderedItems() {
    return this.pagesDataService.orderedItems;
  }
}
