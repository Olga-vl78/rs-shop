import { Component, Input, OnInit } from '@angular/core';
import { IGoodsItem } from 'src/app/shared/models/goods-item.model';

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.scss']
})
export class FavoriteItemComponent implements OnInit {
  @Input() item: IGoodsItem | undefined = undefined;

  imageUrl: string | undefined = '';

  ngOnInit(): void {
    this.imageUrl = this.item?.imageUrls[0];
  }
}
