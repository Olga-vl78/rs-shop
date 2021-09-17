import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteItemComponent } from './components/favorite-item/favorite-item.component';
import { FavoriteItemsContainerComponent } from './components/favorite-items-container/favorite-items-container.component';
import { FavoriteItemsPageComponent } from './pages/favorite-items-page/favorite-items-page.component';


const routes: Routes = [
  { path: '', component: FavoriteItemsPageComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [FavoriteItemComponent, FavoriteItemsContainerComponent, FavoriteItemsPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class FavoriteGoodsModule { }
