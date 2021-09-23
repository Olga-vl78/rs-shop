import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-rating',
  templateUrl: './item-rating.component.html',
  styleUrls: ['./item-rating.component.scss'],
})
export class ItemRatingComponent implements OnInit {
  @Input() itemRating: number | undefined = undefined;

  stars = [
    { color: '#e5e5e5' },
    { color: '#e5e5e5' },
    { color: '#e5e5e5' },
    { color: '#e5e5e5' },
    { color: '#e5e5e5' },
  ];

  ngOnInit(): void {
    this.getStarsColor();
  }

  getStarsColor() {
    const amount = this.itemRating;
    if (amount) {
      for (let i = 0; i < this.stars.length; i += 1) {
        if (i < amount) this.stars[i].color = '#0072BC';
      }
    }
  }
}
