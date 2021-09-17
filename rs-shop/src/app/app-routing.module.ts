import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main/pages/main-page/main-page.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainPageComponent,
  },
  {
    path: 'categories',
    loadChildren: () => import('./goods/goods.module').then((m) => m.GoodsModule),
  },
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then((m) => m.OrderModule),

  },
  {
    path: 'favorite',
    loadChildren: () => import('./favorite-goods/favorite-goods.module').then((m) => m.FavoriteGoodsModule),

  },
  /*
    {
      path: '**',
      redirectTo: 'main',
    },*/
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
