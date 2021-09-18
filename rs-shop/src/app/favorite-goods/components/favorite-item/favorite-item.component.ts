import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/core/services/backend.service';
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
    private readonly backendService: BackendService
  ) { }

  ngOnInit(): void {
    this.imageUrl = this.item?.imageUrls[0];
  }

  goToItemDetailedPage(itemId: string | undefined) {
    if (itemId) {
      this.backendService.fetchItem(itemId)
        .then((item) => {
          this.router.navigate([`/categories/${item.category}/${item.subCategory}/${itemId}`])
        })
    }
  }
}
