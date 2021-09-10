import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemsContainerComponent } from './components/items-container/items-container.component';
import { SubcategoryCardComponent } from './components/subcategory-card/subcategory-card.component';
import { SubcategoryCardsContainerComponent } from './components/subcategory-cards-container/subcategory-cards-container.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { SubcategoryPageComponent } from './pages/subcategory-page/subcategory-page.component';

const routes: Routes = [
  { path: '', component: CategoriesPageComponent, pathMatch: 'full' },
  { path: ':catId/:subId', component: SubcategoryPageComponent },
  { path: ':catId', component: CategoryPageComponent },
  //{ path: ':id', component: DetailedInfoPageComponent },
];

@NgModule({
  declarations: [
    CategoriesPageComponent,
    CategoriesListComponent,
    SubcategoryComponent,
    ItemCardComponent,
    ItemsContainerComponent,
    SubcategoryPageComponent,
    SubcategoryCardComponent,
    SubcategoryCardsContainerComponent,
    CategoryPageComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class GoodsModule { }
