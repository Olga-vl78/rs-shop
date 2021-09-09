import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';

const routes: Routes = [
  { path: '', component: CatalogPageComponent, pathMatch: 'full' },
  //{ path: '', component: CategoryPageComponent, pathMatch: 'full' },
  //{ path: ':id', component: DetailedInfoPageComponent },
];

@NgModule({
  declarations: [
    CatalogPageComponent,
    CategoriesListComponent,
    SubcategoryComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class GoodsModule { }
