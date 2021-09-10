import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IGoodsItem } from 'src/app/shared/models/goods-item.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input()
  item: IGoodsItem | undefined = undefined;

  categoryId: string = '';

  subcategoryId: string = '';

  imageUrl: string | undefined = '';



  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.categoryId = this.activatedRoute.snapshot.params.catId;
    this.subcategoryId = this.activatedRoute.snapshot.params.subId;
    this.imageUrl = this.item?.imageUrls[0];
  }

  goToItemDetailedPage() {
    this.router.navigate([`/categories/${this.categoryId}/${this.subcategoryId}/${this.item?.id}`])
  }

}
