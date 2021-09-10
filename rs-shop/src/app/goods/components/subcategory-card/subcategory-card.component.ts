import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISubcategory } from 'src/app/shared/models/subcategory.model';

@Component({
  selector: 'app-subcategory-card',
  templateUrl: './subcategory-card.component.html',
  styleUrls: ['./subcategory-card.component.scss']
})
export class SubcategoryCardComponent implements OnInit {
  @Input()
  subcategory: ISubcategory | undefined = undefined;

  categoryId: string = '';

  constructor(
    private readonly router: Router,
    private readonly activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.categoryId = this.activatedRouter.snapshot.params.catId;
  }


  goToSubcategoryPage() {
    if (this.subcategory) {
      this.router.navigate([`/categories/${this.categoryId}/${this.subcategory.id}`])
    }
  }
}


