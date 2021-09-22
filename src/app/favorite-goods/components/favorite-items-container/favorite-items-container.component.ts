import { Component, OnInit } from '@angular/core';
import { PagesDataService } from 'src/app/core/services/pages-data.service';
import { IGoodsItem } from 'src/app/shared/models/goods-item.model';

@Component({
  selector: 'app-favorite-items-container',
  templateUrl: './favorite-items-container.component.html',
  styleUrls: ['./favorite-items-container.component.scss'],
})
export class FavoriteItemsContainerComponent implements OnInit {
  items: IGoodsItem[] = [];

  isEmpty: boolean = true;

  constructor(private readonly pagesDataService: PagesDataService) {}

  ngOnInit(): void {
    this.items = this.favoriteItems;
    this.checkFavoriteItems();
  }

  get favoriteItems() {
    return this.pagesDataService.favoriteItems;
  }

  checkFavoriteItems() {
    if (this.favoriteItems.length === 0) this.isEmpty = true;
    else this.isEmpty = false;
  }
}
