import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/app/core/services/backend.service';
import { IGoodsItem } from 'src/app/shared/models/goods-item.model';

@Component({
  selector: 'app-item-detailed-info',
  templateUrl: './item-detailed-info.component.html',
  styleUrls: ['./item-detailed-info.component.scss']
})
export class ItemDetailedInfoComponent implements OnInit {
  item: IGoodsItem | undefined;

  imageUrl: string = '';

  itemId: string = '';

  subcategoryId: string = '';

  categoryId: string = '';

  categories: string = 'Категории товаров';

  categoryName: string = '';

  subcategoryName: string = '';

  availableAmount: number = 0;

  itemNumber = 0;

  stars = [
    { color: '#e5e5e5' },
    { color: '#e5e5e5' },
    { color: '#e5e5e5' },
    { color: '#e5e5e5' },
    { color: '#e5e5e5' },
  ]

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly backendService: BackendService,
  ) { }

  ngOnInit(): void {
    this.categoryId = this.activatedRoute.snapshot.params.catId;
    this.subcategoryId = this.activatedRoute.snapshot.params.subId;
    this.itemId = this.activatedRoute.snapshot.params.id;
    this.getNames(this.categoryId, this.subcategoryId);
    if (this.itemId) {
      this.backendService.fetchItem(this.itemId)
        .then((item) => {
          this.item = item;
          this.imageUrl = item.imageUrls[0];
          this.getStarsColor(item.rating);
        })
    }
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

  getStarsColor(rating: number) {
    console.log('amount', rating)
    if (rating) {
      for (let i = 0; i < this.stars.length; i++) {
        if (i < rating) this.stars[i].color = '#0072BC';
      }
    }
  }


  @HostBinding("style.--posSlider")
  get posSlider() {

    return this.itemNumber * 65 + 'px';
  }

}
