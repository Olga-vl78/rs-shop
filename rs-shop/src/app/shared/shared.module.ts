import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddToBasketButtonComponent } from './components/add-to-basket-button/add-to-basket-button.component';
import { AddToFavoriteButtonComponent } from './components/add-to-favorite-button/add-to-favorite-button.component';
import { ColorDirective } from './directives/color.directive';





@NgModule({
  declarations: [
    AddToBasketButtonComponent,
    ColorDirective,
    AddToFavoriteButtonComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [CommonModule, AddToBasketButtonComponent, AddToFavoriteButtonComponent, ColorDirective],
})
export class SharedModule { }
