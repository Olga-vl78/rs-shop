import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteItemComponent } from './components/favorite-item/favorite-item.component';
import { FavoriteItemsContainerComponent } from './components/favorite-items-container/favorite-items-container.component';
import { LoginPopupComponent } from './components/login-popup/login-popup.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { OrdersContainerComponent } from './components/orders-container/orders-container.component';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';
import { FavoriteItemsPageComponent } from './pages/favorite-items-page/favorite-items-page.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';

const routes: Routes = [
  { path: '', component: OrderPageComponent, pathMatch: 'full' },
  // { path: '', component: FavoriteItemsPageComponent, pathMatch: 'full' },

];

@NgModule({
  declarations: [
    OrdersTableComponent,
    OrdersContainerComponent,
    OrderPageComponent,
    OrderFormComponent,
    FavoriteItemComponent,
    FavoriteItemsContainerComponent,
    FavoriteItemsPageComponent,
    LoginPopupComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class UserModule { }
