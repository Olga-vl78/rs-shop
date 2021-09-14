import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IGoodsItem } from 'src/app/shared/models/goods-item.model';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class PagesDataService {

  $searchItems = new BehaviorSubject<IGoodsItem[]>([]);

  orderedItems: IGoodsItem[] = [];

  favoriteItems: IGoodsItem[] = [];

  constructor(
    private readonly backendService: BackendService,
  ) { }

  async getSearchItems(inputValue: string) {
    const items = await this.backendService.fetchSearchResult(inputValue);
    this.$searchItems.next(items);
    console.log(items)
  }

  async getOrderedItems(id: string) {
    const item = await this.backendService.fetchItem(id);
    this.orderedItems.push(item);
  }

  async getFavoriteItems(id: string) {
    const item = await this.backendService.fetchItem(id);
    this.favoriteItems.push(item);
    console.log(this.favoriteItems)
  }

  clearItems() {
    this.$searchItems.next([]);
    console.log(this.$searchItems.value)
  }
}
