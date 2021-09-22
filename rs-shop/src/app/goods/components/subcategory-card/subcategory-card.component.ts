import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from 'src/app/core/services/backend.service';
import { ISubcategory } from 'src/app/shared/models/subcategory.model';

@Component({
  selector: 'app-subcategory-card',
  templateUrl: './subcategory-card.component.html',
  styleUrls: ['./subcategory-card.component.scss'],
})
export class SubcategoryCardComponent implements OnInit {
  @Input() subcategory: ISubcategory | undefined = undefined;

  categoryId: string = '';

  imageUrl: string = '';

  constructor(
    private readonly router: Router,
    private readonly activatedRouter: ActivatedRoute,
    private readonly backendService: BackendService,
  ) {}

  ngOnInit(): void {
    this.categoryId = this.activatedRouter.snapshot.params.catId;
    this.getImageUrl();
  }

  getImageUrl() {
    if (this.subcategory) {
      this.backendService.fetchSubcategory(this.categoryId, this.subcategory.id).then((items) => {
        this.imageUrl = items[2].imageUrls[0];
      });
    }
  }

  goToSubcategoryPage() {
    if (this.subcategory) {
      this.router.navigate([`/categories/${this.categoryId}/${this.subcategory.id}`]);
    }
  }
}
