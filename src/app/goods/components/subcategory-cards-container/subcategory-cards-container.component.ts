import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/core/services/backend.service';
import { IGoodsItem } from 'src/app/shared/models/goods-item.model';
import { ISubcategory } from 'src/app/shared/models/subcategory.model';

@Component({
  selector: 'app-subcategory-cards-container',
  templateUrl: './subcategory-cards-container.component.html',
  styleUrls: ['./subcategory-cards-container.component.scss'],
})
export class SubcategoryCardsContainerComponent implements OnInit {
  subscriptions: Subscription[] = [];

  subcategories: ISubcategory[] = [];

  items: IGoodsItem[] = [];

  categoryId: string = '';

  categoryName: string = '';

  categories: string = 'Категории товаров';

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly backendService: BackendService,
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.activatedRoute.paramMap.subscribe((params) => {
        const id = params.get('catId');
        if (id) {
          this.categoryId = id;
          this.getSubcategories(id);
        }
      }),
    );
  }

  getSubcategories(id: string) {
    this.backendService.fetchCategories().then((cats) => {
      const currentCategory = cats.find((cat) => cat.id === id);
      if (currentCategory) {
        this.categoryName = currentCategory.name;
        this.subcategories = currentCategory.subCategories;
      }
    });
  }
}
