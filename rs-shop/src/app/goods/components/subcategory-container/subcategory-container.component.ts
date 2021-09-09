import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/app/core/services/backend.service';
import { ICategory } from 'src/app/shared/models/category.model';
import { IGoodsItem } from 'src/app/shared/models/goods-item.model';

@Component({
  selector: 'app-subcategory-container',
  templateUrl: './subcategory-container.component.html',
  styleUrls: ['./subcategory-container.component.scss']
})
export class SubcategoryContainerComponent implements OnInit {
  items: IGoodsItem[] = [];

  categoryId: string = '';

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly backendService: BackendService,
  ) { }

  ngOnInit(): void {
    const subcategoryId: string = this.activatedRoute.snapshot.params.id;
    this.backendService.fetchCategories()
      .then((categories) => this.getCategoryId(categories, subcategoryId))
      .then(() => this.backendService.fetchSubcategory(this.categoryId, subcategoryId))
      .then((itemsData) => this.items = itemsData);
  }

  getCategoryId(categories: ICategory[], id: string) {
    categories.forEach((cat) => {
      const subcategory = cat.subCategories.filter((subcat) => {
        if (subcat.id === id) {
          return subcat;
        } else return;
      })
      if (subcategory && cat.subCategories.includes(subcategory[0])) this.categoryId = cat.id;
    })
  }

}
