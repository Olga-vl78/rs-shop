import { Component } from '@angular/core';
import { PagesDataService } from 'src/app/core/services/pages-data.service';

@Component({
  selector: 'app-banners-slider',
  templateUrl: './banners-slider.component.html',
  styleUrls: ['./banners-slider.component.scss'],
})
export class BannersSliderComponent {
  constructor(private readonly pagesDataService: PagesDataService) {}

  get banners() {
    return this.pagesDataService.banners;
  }
}
