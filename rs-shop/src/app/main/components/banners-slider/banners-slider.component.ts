import { Component, OnInit } from '@angular/core';
import { IBanner } from '../../models/banner.module';

@Component({
  selector: 'app-banners-slider',
  templateUrl: './banners-slider.component.html',
  styleUrls: ['./banners-slider.component.scss']
})
export class BannersSliderComponent implements OnInit {

  bannersData: IBanner[] = [
    { image: 'assets/images/slider_apple.jpg' },
    { image: 'assets/images/slider_atlant.jpg' },
    { image: 'assets/images/slider_books.jpg' },
    { image: 'assets/images/slider_huawei.jpg' },
    { image: 'assets/images/slider_samsung.jpg' },
    { image: 'assets/images/slider_school.jpg' },
    { image: 'assets/images/slider_радиаторы.jpg' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
