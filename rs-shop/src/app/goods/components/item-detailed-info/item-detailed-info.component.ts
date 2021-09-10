import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from 'src/app/core/services/backend.service';
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

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly backendService: BackendService
  ) { }

  ngOnInit(): void {
    this.itemId = this.activatedRoute.snapshot.params.id;
    this.backendService.fetchItem(this.itemId)
      .then((item) => {
        this.item = item;
        this.imageUrl = item.imageUrls[0];
      })
  }

}
