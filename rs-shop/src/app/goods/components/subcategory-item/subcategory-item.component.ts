import { Component, Input, OnInit } from '@angular/core';
import { IGoodsItem } from 'src/app/shared/models/goods-item.model';

@Component({
  selector: 'app-subcategory-item',
  templateUrl: './subcategory-item.component.html',
  styleUrls: ['./subcategory-item.component.scss']
})
export class SubcategoryItemComponent implements OnInit {
  @Input()
  item: IGoodsItem | undefined = undefined;

  imageUrl: string | undefined = '';



  constructor() { }

  ngOnInit(): void {
    this.imageUrl = this.item?.imageUrls[0];
    //item?.availableAmount
  }

}
