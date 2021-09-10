import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/app/core/services/backend.service';
import { IGoodsItem } from 'src/app/shared/models/goods-item.model';

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss']
})
export class ItemsContainerComponent implements OnInit {
  items: IGoodsItem[] = [];

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly backendService: BackendService,
  ) { }

  ngOnInit(): void {
    const categoryId: string = this.activatedRoute.snapshot.params.catId;
    const subcategoryId: string = this.activatedRoute.snapshot.params.subId;
    this.backendService.fetchSubcategory(categoryId, subcategoryId)
      .then((itemsData) => this.items = itemsData);
  }
}
