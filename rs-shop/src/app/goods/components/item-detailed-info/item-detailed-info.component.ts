import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
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

  subscriptions: Subscription[] = [];

  itemId: string = '';

  availableAmount: number = 0;

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
    this.itemId = this.activatedRoute.snapshot.params.id;
    if (this.itemId) {
      this.backendService.fetchItem(this.itemId)
        .then((item) => {
          this.item = item;
          this.imageUrl = item.imageUrls[0];
          this.getStarsColor(item.rating);
        })
    }

    /*this.subscriptions.push(
      this.activatedRoute.paramMap.subscribe((params) => {
        const id = params.get('id');
        if (id) {
          this.backendService.fetchItem(id)
            .then((item) => {
              this.item = item;
              this.imageUrl = item.imageUrls[0];
              this.getStarsColor(item.rating);
              console.log('ID', this.item.id)
            })
        }
      })
    )*/
  }

  getStarsColor(rating: number) {
    console.log('amount', rating)
    if (rating) {
      for (let i = 0; i < this.stars.length; i++) {
        if (i < rating) this.stars[i].color = '#0072BC';
      }
    }
  }
}
