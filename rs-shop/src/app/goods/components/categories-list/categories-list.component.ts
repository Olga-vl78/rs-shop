import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BackendService } from 'src/app/core/services/backend.service';
import { ICategory } from 'src/app/shared/models/category.model';
import { IGoodsItem } from 'src/app/shared/models/goods-item.model';
import { ISubcategory } from 'src/app/shared/models/subcategory.model';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {


  categories: ICategory[] = [];

  categoriesSrc = [
    'assets/icons/washingmachine.svg',
    'assets/icons/electronics.svg',
    'assets/icons/computer.svg',
    'assets/icons/sofa.svg',
    'assets/icons/painting.svg'
  ]

  subcategories: ISubcategory[] = [];

  categoryName: string = 'Бытовая техника';

  $currentCategoryId = new BehaviorSubject<string>('appliances');

  $currentItems = new BehaviorSubject<IGoodsItem[]>([]);


  constructor(private readonly backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.fetchCategories()
      .then((cats) => this.onFetchCategories(cats));
    this.$currentCategoryId.subscribe((id) => this.getCategory(id));
  }

  onFetchCategories(categories: ICategory[]) {
    let index = 0;
    categories.forEach((category) => category.src = this.categoriesSrc[index++]);
    this.categories = categories;
    this.subcategories = this.categories[0].subCategories;
  }

  onCategoryMouseOver(id: string) {
    this.$currentCategoryId.next(id);
  }

  getCategory(id: string) {
    let category = this.categories.find((cat) => cat.id === id);

    if (category) {
      this.categoryName = category.name;
      this.subcategories = category.subCategories;
      this.subcategories.forEach((subcat) => {
        if (category)
          this.backendService.fetchSubcategory(category.id, subcat.id)
            .then((itemsData) => subcat.items = itemsData)
      })
    }
  }

  onFetchItems(subcatId: string) {
    this.backendService.fetchSubcategory(this.$currentCategoryId.value, subcatId)
      .then((items) => this.$currentItems.next(items));
  }
}
