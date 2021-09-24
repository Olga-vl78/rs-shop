import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/core/services/backend.service';
import { ISubcategory } from 'src/app/shared/models/subcategory.model';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss'],
})
export class SubcategoryComponent {
  @Input() subcategory: ISubcategory | undefined = undefined;

  @Input() categoryId: string = '';

  constructor(private readonly router: Router, private readonly backendService: BackendService) {}

  goToSubcategoryPage() {
    if (this.subcategory) {
      this.router.navigate([`/categories/${this.categoryId}/${this.subcategory.id}`]);
    }
  }

  goToDetailedInfoPage(itemId: string) {
    if (this.subcategory) {
      this.router.navigate([`/categories/${this.categoryId}/${this.subcategory.id}/${itemId}`]);
    }
  }
}
