import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/core/services/backend.service';
import { PagesDataService } from 'src/app/core/services/pages-data.service';
import { IGoodsItem } from 'src/app/shared/models/goods-item.model';

@Component({
  selector: 'app-popular-item-card',
  templateUrl: './popular-item-card.component.html',
  styleUrls: ['./popular-item-card.component.scss'],
})
export class PopularItemCardComponent implements OnInit {
  @Input() goodsItem: IGoodsItem | undefined = undefined;

  imageUrl: string | undefined = '';

  constructor(
    private readonly pagesDataService: PagesDataService,
    private readonly backendService: BackendService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.imageUrl = this.goodsItem?.imageUrls[0];
  }

  getImageUrl(item: IGoodsItem) {
    const imageUrl = item.imageUrls[0];
    return imageUrl;
  }

  async getSearchItems(itemName: string | undefined) {
    if (itemName) {
      const items = await this.backendService.fetchSearchResult(itemName);
      console.log(items);
    }
  }

  async goToItemDetailedPage(itemName: string | undefined) {
    if (itemName) {
      const items = await this.backendService.fetchSearchResult(itemName);
      const item = items[0];
      this.router.navigate([`/categories/${item.category}/${item.subCategory}/${item.id}`]);
    }
  }
}
