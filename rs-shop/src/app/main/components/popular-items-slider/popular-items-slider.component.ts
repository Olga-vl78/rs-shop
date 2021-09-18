import { Component, OnInit } from '@angular/core';
import { PagesDataService } from 'src/app/core/services/pages-data.service';
import { IGoodsItem } from 'src/app/shared/models/goods-item.model';

@Component({
  selector: 'app-popular-items-slider',
  templateUrl: './popular-items-slider.component.html',
  styleUrls: ['./popular-items-slider.component.scss']
})
export class PopularItemsSliderComponent implements OnInit {
  items: IGoodsItem[] = [];


  constructor(private readonly pagesDataService: PagesDataService) { }

  ngOnInit(): void {
    this.pagesDataService.getPopularItems()
      .then((items) => this.items = items)
  }

}
