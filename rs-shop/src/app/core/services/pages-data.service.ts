import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IGoodsItem } from 'src/app/shared/models/goods-item.model';
import { BackendService } from './backend.service';

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export enum SortParam {
  Price = 'price',
  Rating = 'rating',
}

@Injectable({
  providedIn: 'root'
})
export class PagesDataService {

  $searchItems = new BehaviorSubject<IGoodsItem[]>([]);

  $sortOrder = new BehaviorSubject<SortOrder | null>(null);

  $sortParam = new BehaviorSubject<SortParam | null>(null);

  orderedItems: IGoodsItem[] = [];

  favoriteItems: IGoodsItem[] = [];

  popularItems: IGoodsItem[] = [];

  banners: string[] = [
    'assets/images/slider_apple.jpg',
    'assets/images/slider_atlant.jpg',
    'assets/images/slider_books.jpg',
    'assets/images/slider_huawei.jpg',
    'assets/images/slider_samsung.jpg',
    'assets/images/slider_school.jpg',
    'assets/images/slider_радиаторы.jpg',
  ]

  constructor(
    private readonly backendService: BackendService,
  ) { }

  async getSearchItems(inputValue: string) {
    const items = await this.backendService.fetchSearchResult(inputValue);
    this.$searchItems.next(items);
    console.log(items)
  }

  async addToOrderedItems(id: string) {
    const item = await this.backendService.fetchItem(id);
    item.amount = 1;
    this.orderedItems.push(item);
  }

  async addToFavoriteItems(id: string) {
    const item = await this.backendService.fetchItem(id);
    this.favoriteItems.push(item);
    console.log(this.favoriteItems)
  }

  async getPopularItems() {
    const categories = await this.backendService.fetchCategories();
    const idsData = categories.map((category) => category.id);
    const itemsDataFirst = await this.backendService.fetchCategory(idsData[1]);
    const itemsDataSecond = await this.backendService.fetchCategory(idsData[2]);
    const popularItems = itemsDataFirst.concat(itemsDataSecond).filter((item) => item.rating === 5);
    console.log(popularItems)
    return popularItems;
  }

  clearItems() {
    this.$searchItems.next([]);
    console.log(this.$searchItems.value)
  }

  sortItemsByNum(sortingMode: SortOrder, param: SortParam) {
    this.$sortOrder.next(sortingMode);
    this.$sortParam.next(param);
  }

  updateOrderedItems(amount: number, id: string) {
    this.orderedItems.map((item) => {
      if (item.id === id) {
        item.amount = amount;
      }
    });
  }
}
