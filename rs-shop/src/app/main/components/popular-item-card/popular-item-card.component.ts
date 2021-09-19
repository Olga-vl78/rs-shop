import { Component, Input, OnInit } from '@angular/core';
import { PagesDataService } from 'src/app/core/services/pages-data.service';
import { IGoodsItem } from 'src/app/shared/models/goods-item.model';

@Component({
  selector: 'app-popular-item-card',
  templateUrl: './popular-item-card.component.html',
  styleUrls: ['./popular-item-card.component.scss']
})
export class PopularItemCardComponent implements OnInit {
  @Input() goodsItem: IGoodsItem | undefined = undefined;

  imageUrl: string | undefined = '';

  constructor(
    private readonly pagesDataService: PagesDataService
  ) { }

  ngOnInit(): void {
    this.imageUrl = this.goodsItem?.imageUrls[0];
  }

  getImageUrl(item: IGoodsItem) {
    const imageUrl = item.imageUrls[0];
    return imageUrl;
  }

}
