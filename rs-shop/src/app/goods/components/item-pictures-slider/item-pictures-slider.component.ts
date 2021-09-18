import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-pictures-slider',
  templateUrl: './item-pictures-slider.component.html',
  styleUrls: ['./item-pictures-slider.component.scss']
})
export class ItemPicturesSliderComponent implements OnInit {
  @Input() itemPictures: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
