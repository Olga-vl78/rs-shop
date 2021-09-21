import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { BackendService } from 'src/app/core/services/backend.service';
import { PagesDataService, SortOrder, SortParam } from 'src/app/core/services/pages-data.service';
import { IGoodsItem } from 'src/app/shared/models/goods-item.model';

const ITEMS_PER_PAGE = 9;

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss']
})
export class ItemsContainerComponent implements OnInit {
  items: IGoodsItem[] = [];

  categoryId: string = '';

  subcategoryId: string = '';

  categoryName: string = '';

  subcategoryName: string = '';

  categories: string = 'Категории товаров';

  sortingMode: SortOrder = SortOrder.Asc;

  pagesCount: number = 0;

  pageNum: number = 1;

  $pagesItems = new BehaviorSubject<IGoodsItem[]>([]);

  isFirstPage: boolean = true;

  isLastPage: boolean = false;


  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly backendService: BackendService,
    private readonly pagesDataService: PagesDataService
  ) { }

  ngOnInit(): void {
    this.categoryId = this.activatedRoute.snapshot.params.catId;
    this.subcategoryId = this.activatedRoute.snapshot.params.subId;
    this.getNames(this.categoryId, this.subcategoryId);
    this.getItems();
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

  getItems() {
    this.backendService.fetchSubcategory(this.categoryId, this.subcategoryId)
      .then((itemsData) => {
        this.items = itemsData;
        this.pagesCount = Math.ceil(this.items.length / ITEMS_PER_PAGE);
        this.$pagesItems.next(this.getPageItems());
      });
  }

  getNames(catid: string, subcutId: string) {
    this.backendService.fetchCategories()
      .then((cats) => {
        const currCategory = (cats.filter((cat) => cat.id === catid))[0];
        this.categoryName = currCategory.name;
        const subcategories = currCategory.subCategories
        return subcategories;
      })
      .then((subcats) => {
        const currSubcategory = (subcats.filter((subcat) => subcat.id === subcutId))[0];
        this.subcategoryName = currSubcategory.name;
        return this.subcategoryName;
      })
  }

  goToNextPage() {
    if (this.pageNum < this.pagesCount) this.pageNum += 1;
    if (this.pageNum > 1) this.isFirstPage = false;
    if (this.pageNum === this.pagesCount) this.isLastPage = true;

    this.$pagesItems.next(this.getPageItems());
  }

  goToPrevPage() {
    if (this.pageNum > 1) this.pageNum -= 1;
    if (this.pageNum < this.pagesCount) this.isLastPage = false;
    if (this.pageNum === 1) {
      this.isFirstPage = true;
    }
    this.$pagesItems.next(this.getPageItems());
  }

  getPageItems() {
    let startIdx = (this.pageNum - 1) * ITEMS_PER_PAGE;
    let lastIdx = startIdx + ITEMS_PER_PAGE;
    return this.items.slice(startIdx, lastIdx);
  }
}
