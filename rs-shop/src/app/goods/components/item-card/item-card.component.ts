import { Component, Input, OnInit } from '@angular/core';
import { IGoodsItem } from 'src/app/shared/models/goods-item.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input()
  item: IGoodsItem | undefined = undefined;

  imageUrl: string | undefined = '';



  constructor() { }

  ngOnInit(): void {
    this.imageUrl = this.item?.imageUrls[0];
    console.log(this.imageUrl);
    //item?.availableAmount
  }

}
