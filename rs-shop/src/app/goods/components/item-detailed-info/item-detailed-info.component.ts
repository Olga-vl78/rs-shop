import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/core/services/backend.service';
import { PagesDataService } from 'src/app/core/services/pages-data.service';
import { IGoodsItem } from 'src/app/shared/models/goods-item.model';

@Component({
  selector: 'app-item-detailed-info',
  templateUrl: './item-detailed-info.component.html',
  styleUrls: ['./item-detailed-info.component.scss']
})
export class ItemDetailedInfoComponent implements OnInit {
  item: IGoodsItem | undefined;

  itemId: string = '';

  imageUrl: string = '';

  subscriptions: Subscription[] = [];

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly backendService: BackendService,
    private readonly pagesDataService: PagesDataService
  ) { }

  ngOnInit(): void {
    //this.itemId = this.activatedRoute.snapshot.params.id;
    this.subscriptions.push(
      this.activatedRoute.paramMap.subscribe((params) => {
        const id = params.get('id');
        if (id) {
          this.backendService.fetchItem(id)
            .then((item) => {
              this.item = item;
              this.imageUrl = item.imageUrls[0];
            })
        }
      })
    )
  }
}
