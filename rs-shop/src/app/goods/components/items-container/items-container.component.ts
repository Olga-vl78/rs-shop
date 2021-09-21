import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/app/core/services/backend.service';
import { PagesDataService, SortOrder, SortParam } from 'src/app/core/services/pages-data.service';
import { IGoodsItem } from 'src/app/shared/models/goods-item.model';

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss']
})
export class ItemsContainerComponent implements OnInit {
  items: IGoodsItem[] = [];

  categoryId: string = '';

  subcategoryName: string = '';

  subcategoryId: string = '';

  sortingMode: SortOrder = SortOrder.Asc;

  categoryName: string = '';

  categories: string = 'Категории товаров'

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly backendService: BackendService,
    private readonly pagesDataService: PagesDataService
  ) { }

  ngOnInit(): void {
    this.categoryId = this.activatedRoute.snapshot.params.catId;
    this.subcategoryId = this.activatedRoute.snapshot.params.subId;
    this.getCtegoryName(this.categoryId);
    this.backendService.fetchSubcategory(this.categoryId, this.subcategoryId)
      .then((itemsData) => this.items = itemsData);
    this.backendService.fetchCategories()
      .then((categories) => categories.filter((category) => category.id === this.categoryId))
      .then((category) => category[0].subCategories.filter((subcat) => subcat.id === this.subcategoryId))
      .then((subcategory) => {
        this.subcategoryName = subcategory[0].name;
      });
  }

  get $sortOrder() {
    return this.pagesDataService.$sortOrder;
  }

  get $sortParam() {
    return this.pagesDataService.$sortParam;
  }

  onSortItemsByPrice() {
    if (this.sortingMode === SortOrder.Asc) {
      this.pagesDataService.sortItemsByNum(SortOrder.Asc, SortParam.Price);
      this.sortingMode = SortOrder.Desc;
    } else {
      this.pagesDataService.sortItemsByNum(SortOrder.Desc, SortParam.Price);
      this.sortingMode = SortOrder.Asc;
    }
  }

  onSortItemsByRating() {
    if (this.sortingMode === SortOrder.Asc) {
      this.pagesDataService.sortItemsByNum(SortOrder.Asc, SortParam.Rating);
      this.sortingMode = SortOrder.Desc;
    } else {
      this.pagesDataService.sortItemsByNum(SortOrder.Desc, SortParam.Rating);
      this.sortingMode = SortOrder.Asc;
    }
  }

  getCtegoryName(id: string) {
    this.backendService.fetchCategories()
      .then((cats) => {
        const currentCategory = (cats.filter((cat) => cat.id === id))[0];
        this.categoryName = currentCategory.name;
        return this.categoryName;
      });
  }
}
