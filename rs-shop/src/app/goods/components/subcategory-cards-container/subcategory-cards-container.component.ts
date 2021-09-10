import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/core/services/backend.service';
import { IGoodsItem } from 'src/app/shared/models/goods-item.model';
import { ISubcategory } from 'src/app/shared/models/subcategory.model';

@Component({
  selector: 'app-subcategory-cards-container',
  templateUrl: './subcategory-cards-container.component.html',
  styleUrls: ['./subcategory-cards-container.component.scss']
})
export class SubcategoryCardsContainerComponent implements OnInit {
  subscriptions: Subscription[] = [];

  subcategories: ISubcategory[] = [];

  items: IGoodsItem[] = [];

  categoryId: string = '';


  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly backendService: BackendService,
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.activatedRoute.paramMap.subscribe((params) => {
        const id = params.get('catId');
        if (id) this.getSubcategories(id);
      }));
  }

  getSubcategories(id: string) {
    this.backendService.fetchCategories()
      .then((cats) => {
        const currentCategory = (cats.filter((cat) => cat.id === id))[0];
        this.subcategories = currentCategory.subCategories
        return this.subcategories;
      });
  }
  /*
    getSubcategoryImg(subcategoryId: string) {
      return this.backendService.fetchSubcategory(this.categoryId, subcategoryId)
        .then((itemsData) => itemsData[0].imageUrls[0]);
    }
  */
}
