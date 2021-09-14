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
    //component: CatalogPageComponent,
    loadChildren: () => import('./goods/goods.module').then((m) => m.GoodsModule),
  },
  {
    path: 'order',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),

  },
  {
    path: 'favorite',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),

  },/*
  {
    path: 'subcategory',
    loadChildren: () => import('./goods/goods.module').then((m) => m.GoodsModule),
  },
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
