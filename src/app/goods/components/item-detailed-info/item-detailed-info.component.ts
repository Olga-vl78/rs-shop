import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/core/services/backend.service';
import { IGoodsItem } from 'src/app/shared/models/goods-item.model';

@Component({
  selector: 'app-item-detailed-info',
  templateUrl: './item-detailed-info.component.html',
  styleUrls: ['./item-detailed-info.component.scss'],
})
export class ItemDetailedInfoComponent implements OnInit {
  item: IGoodsItem | undefined;

  subscriptions: Subscription[] = [];

  imageUrl: string = '';

  itemId: string = '';

  subcategoryId: string = '';

  categoryId: string = '';

  categories: string = 'Категории товаров';

  categoryName: string = '';

  subcategoryName: string = '';

  itemNumber = 0;

  isPopular: boolean = false;

  stars = [
    { color: '#e5e5e5' },
    { color: '#e5e5e5' },
    { color: '#e5e5e5' },
    { color: '#e5e5e5' },
    { color: '#e5e5e5' },
  ];

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly backendService: BackendService,
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.activatedRoute.paramMap.subscribe((params) => {
        const categoryId = params.get('catId');
        const subcatId = params.get('subId');
        const itemId = params.get('id');

        if (categoryId && subcatId && itemId) {
          this.categoryId = categoryId;
          this.subcategoryId = subcatId;
          this.itemId = itemId;
          this.backendService.fetchItem(this.itemId).then((item) => {
            this.item = item;
            this.imageUrl = item.imageUrls[0];
            this.getStarsColor(item.rating);
            this.onCheckItemRating(item.rating);
          });
          this.getNames(this.categoryId, this.subcategoryId);
        }
      }),
    );
  }

  getNames(catid: string, subcutId: string) {
    this.backendService.fetchCategories().then((cats) => {
      const currCategory = cats.filter((cat) => cat.id === catid)[0];
      this.categoryName = currCategory.name;
      const subcategories = currCategory.subCategories;
      const currSubcategory = subcategories.filter((subcat) => subcat.id === subcutId)[0];
      this.subcategoryName = currSubcategory.name;
    });
  }

  getStarsColor(rating: number) {
    if (rating) {
      for (let i = 0; i < this.stars.length; i++) {
        if (i < rating) this.stars[i].color = '#0072BC';
      }
    }
  }

  @HostBinding('style.--posSlider')
  get posSlider() {
    return `${this.itemNumber * 65}px`;
  }

  onCheckItemRating(rating: number) {
    if (rating === 5) {
      this.isPopular = true;
    }
  }
}
