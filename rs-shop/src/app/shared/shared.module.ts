import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddToBasketButtonComponent } from './components/add-to-basket-button/add-to-basket-button.component';
import { AddToFavoriteButtonComponent } from './components/add-to-favorite-button/add-to-favorite-button.component';
import { ItemRatingComponent } from './components/item-rating/item-rating.component';
import { ColorDirective } from './directives/color.directive';

@NgModule({
  declarations: [
    AddToBasketButtonComponent,
    ColorDirective,
    AddToFavoriteButtonComponent,
    ItemRatingComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    CommonModule,
    AddToBasketButtonComponent,
    AddToFavoriteButtonComponent,
    ColorDirective,
    ItemRatingComponent,
  ],
})
export class SharedModule {}
