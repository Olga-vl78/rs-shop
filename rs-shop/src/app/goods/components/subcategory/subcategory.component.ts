import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/core/services/backend.service';
import { ICategory } from 'src/app/shared/models/category.model';
import { ISubcategory } from 'src/app/shared/models/subcategory.model';


@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent implements OnInit {
  @Input()
  subcategory: ISubcategory | undefined = undefined;

  categoryId: string = '';

  constructor(private readonly router: Router, private readonly backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.fetchCategories()
      .then((categories) => {
        if (this.subcategory)
          this.getCategoryId(categories, this.subcategory.id)
      })
  }

  getCategoryId(categories: ICategory[], id: string) {
    categories.forEach((cat) => {
      const subcategory = cat.subCategories.filter((subcat) => {
        if (subcat.id === id) {
          return subcat;
        } else return;
      })
      if (subcategory && cat.subCategories.includes(subcategory[0])) this.categoryId = cat.id;
    })
  }

  goToSubcategoryPage() {
    if (this.subcategory) {
      this.router.navigate([`/categories/${this.categoryId}/${this.subcategory.id}`])
    }
  }

}
