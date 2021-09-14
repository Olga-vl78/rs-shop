import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagesDataService } from 'src/app/core/services/pages-data.service';
import { IGoodsItem } from 'src/app/shared/models/goods-item.model';

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.scss']
})
export class FavoriteItemComponent implements OnInit {
  @Input() item: IGoodsItem | undefined = undefined;

  imageUrl: string | undefined = '';

  constructor(
    private readonly router: Router,
    private readonly pagesDataService: PagesDataService
  ) { }

  ngOnInit(): void {
    this.imageUrl = this.item?.imageUrls[0];
  }

  // goToItemDetailedPage() {
  //   this.router.navigate([`/categories/${this.categoryId}/${this.subcategoryId}/${this.item?.id}`])
  // }

  onGetItemId(id: string | undefined) {
    console.log(id);
    if (id) this.pagesDataService.getOrderedItems(id);
  }

  getImageUrl(item: IGoodsItem) {
    return item.imageUrls[0];
  }
}
