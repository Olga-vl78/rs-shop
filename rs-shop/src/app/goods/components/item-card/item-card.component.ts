import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PagesDataService } from 'src/app/core/services/pages-data.service';
import { IGoodsItem } from 'src/app/shared/models/goods-item.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input() item: IGoodsItem | undefined = undefined;

  categoryId: string = '';

  subcategoryId: string = '';

  imageUrl: string | undefined = '';

  subscriptions: Subscription[] = [];

  //isOrdered: boolean = false;

  isFavorite: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly pagesDataService: PagesDataService
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.activatedRoute.paramMap.subscribe((params) => {
        const categoryId = params.get('catId');
        const subcategoryId = params.get('subId');
        if (categoryId && subcategoryId) {
          this.categoryId = categoryId;
          this.subcategoryId = subcategoryId;
        }
      })
    )
    //this.categoryId = this.activatedRoute.snapshot.params.catId;
    //this.subcategoryId = this.activatedRoute.snapshot.params.subId;
    this.imageUrl = this.item?.imageUrls[0];
    // this.checkOrderedItems(this.item?.id);
    // console.log(this.orderedItems)
    this.checkFavoriteItems()
  }

  goToItemDetailedPage() {
    this.router.navigate([`/categories/${this.categoryId}/${this.subcategoryId}/${this.item?.id}`])
  }

  // onBasketBtnClick(id: string | undefined) {
  //   if (id) this.pagesDataService.addToOrderedItems(id);
  //   this.isOrdered = true;
  // }

  onFavoriteBtnClick(id: string | undefined) {
    console.log(id)
    if (id) this.pagesDataService.addToFavoriteItems(id);
    this.isFavorite = true;
  }

  get favoriteItems() {
    return this.pagesDataService.favoriteItems;
  }


  checkFavoriteItems() {
    if (this.item) {
      const orderedItem = this.favoriteItems.filter((item) => item.id === this.item?.id);
      console.log(orderedItem[0]);
      if (orderedItem[0]) {
        this.isFavorite = true;
      } else this.isFavorite = false;
    }
    console.log('isFavorite', this.isFavorite)
  }

  // checkOrderedItems(id: string | undefined) {
  //   if (this.item) {
  //     const orderedItem = this.orderedItems.filter((item) => item.id === id);
  //     console.log(orderedItem[0]);
  //     if (orderedItem[0]) {
  //       this.isOrdered = true;
  //     } else this.isOrdered = false;
  //   }
  // }

  // get orderedItems() {
  //   return this.pagesDataService.orderedItems;
  // }
}
