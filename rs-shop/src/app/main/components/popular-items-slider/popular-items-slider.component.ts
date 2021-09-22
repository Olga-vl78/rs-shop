import { Component, OnInit } from '@angular/core';
import { PagesDataService } from 'src/app/core/services/pages-data.service';
import { IGoodsItem } from 'src/app/shared/models/goods-item.model';

@Component({
  selector: 'app-popular-items-slider',
  templateUrl: './popular-items-slider.component.html',
})
export class PopularItemsSliderComponent implements OnInit {
  items: IGoodsItem[][] = [];

  constructor(private readonly pagesDataService: PagesDataService) {}

  ngOnInit(): void {
    this.pagesDataService.getPopularItems().then((items: IGoodsItem[]) => {
      const result: IGoodsItem[][] = [];
      let entry: IGoodsItem[] = [];
      items.forEach((item, idx) => {
        if (idx % 2 === 0) {
          entry = [item];
        } else {
          entry.push(item);
          result.push(entry);
        }
      });

      this.items = result;
    });
  }
}
