import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IGoodsItem } from 'src/app/shared/models/goods-item.model';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class PagesDataService {

  $searchItems = new BehaviorSubject<IGoodsItem[]>([]);

  constructor(
    private readonly backendService: BackendService,
  ) { }

  async getSearchItems(inputValue: string) {
    const items = await this.backendService.fetchSearchResult(inputValue);
    this.$searchItems.next(items);
    console.log(items)
  }

  clearItems() {
    this.$searchItems.next([]);
    console.log(this.$searchItems.value)
  }
}
