import { Component, OnInit } from '@angular/core';
import { PagesDataService } from 'src/app/core/services/pages-data.service';

@Component({
  selector: 'app-banners-slider',
  templateUrl: './banners-slider.component.html',
  styleUrls: ['./banners-slider.component.scss']
})
export class BannersSliderComponent implements OnInit {

  constructor(private readonly pagesDataService: PagesDataService) { }

  ngOnInit(): void {
  }

  get banners() {
    return this.pagesDataService.banners;
  }

}
