import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/core/services/backend.service';
import { PagesDataService } from 'src/app/core/services/pages-data.service';
import { IGoodsItem } from 'src/app/shared/models/goods-item.model';

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.scss'],
})
export class FavoriteItemComponent implements OnInit {
  @Input() item: IGoodsItem | undefined = undefined;

  imageUrl: string | undefined = '';

  constructor(
    private readonly router: Router,
    private readonly backendService: BackendService,
    private readonly pagesDataService: PagesDataService,
  ) {}

  ngOnInit(): void {
    this.imageUrl = this.item?.imageUrls[0];
  }

  onDeleteBtnClick(itemId: string | undefined) {
    const items = this.pagesDataService.favoriteItems;
    console.log('items before', items);
    if (itemId) {
      const index = items.findIndex((item) => item.id === itemId);
      if (index > -1) {
        items.splice(index, 1);
      }
    }
    console.log('items after', items);
  }

  goToItemDetailedPage(itemId: string | undefined) {
    if (itemId) {
      this.backendService.fetchItem(itemId).then((item) => {
        this.router.navigate([`/categories/${item.category}/${item.subCategory}/${itemId}`]);
      });
    }
  }
}
