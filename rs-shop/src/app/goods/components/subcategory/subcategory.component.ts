import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/core/services/backend.service';
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
  }
  /*
    async onFetchCategories() {
      const categories = await this.backendService.fetchCategories();
      categories.forEach((cat) => {
        const subcategory = cat.subCategories.filter((subcat) => {
          if (this.subcategory && subcat.id === this.subcategory.id) {
            return subcat;
          } else return;
        })
        if (subcategory && cat.subCategories.includes(subcategory[0])) this.categoryId = cat.id;
        console.log(this.categoryId)
      })
    }
  */
  goToSubcategoryPage() {
    if (this.subcategory?.id) {
      this.router.navigate([`/categories/${this.subcategory.id}`])
    }
  }

}
