import { Component, Input, OnInit } from '@angular/core';
import { PagesDataService } from 'src/app/core/services/pages-data.service';

@Component({
  selector: 'app-add-to-favorite-button',
  templateUrl: './add-to-favorite-button.component.html',
  styleUrls: ['./add-to-favorite-button.component.scss'],
})
export class AddToFavoriteButtonComponent implements OnInit {
  @Input() itemId: string | undefined = '';

  isFavorite: boolean = false;

  constructor(private readonly pagesDataService: PagesDataService) {}

  ngOnInit(): void {
    this.checkFavoriteItems();
  }

  onFavoriteBtnClick(id: string | undefined) {
    console.log(id);
    if (id) this.pagesDataService.addToFavoriteItems(id);
    this.isFavorite = true;
  }

  get favoriteItems() {
    return this.pagesDataService.favoriteItems;
  }

  checkFavoriteItems() {
    const favoriteItem = this.favoriteItems.find((item) => item.id === this.itemId);
    if (favoriteItem) {
      this.isFavorite = true;
    } else this.isFavorite = false;
    console.log('isFavorite', this.isFavorite);
  }
}
