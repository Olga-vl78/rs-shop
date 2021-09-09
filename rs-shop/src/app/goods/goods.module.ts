import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { SubcategoryContainerComponent } from './components/subcategory-container/subcategory-container.component';
import { SubcategoryItemComponent } from './components/subcategory-item/subcategory-item.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { SubcategoryPageComponent } from './pages/subcategory-page/subcategory-page.component';

const routes: Routes = [
  { path: '', component: CategoriesPageComponent, pathMatch: 'full' },
  { path: ':id', component: SubcategoryPageComponent },
  //{ path: '', component: CategoryPageComponent, pathMatch: 'full' },
  //{ path: ':id', component: DetailedInfoPageComponent },
];

@NgModule({
  declarations: [
    CategoriesPageComponent,
    CategoriesListComponent,
    SubcategoryComponent,
    SubcategoryItemComponent,
    SubcategoryContainerComponent,
    SubcategoryPageComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class GoodsModule { }
