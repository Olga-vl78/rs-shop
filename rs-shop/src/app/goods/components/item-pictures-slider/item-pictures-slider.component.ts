import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-pictures-slider',
  templateUrl: './item-pictures-slider.component.html',
  styleUrls: ['./item-pictures-slider.component.scss']
})
export class ItemPicturesSliderComponent {
  @Input() itemPictures: any = [];

  @Input() itemNumber: number = 0;

  @Output() itemNumberChange = new EventEmitter<number>();

  onPage(event: { page: number }) {

    this.itemNumberChange.emit(event.page);
  }

}
