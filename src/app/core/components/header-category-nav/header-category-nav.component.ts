import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/shared/models/category.model';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-header-category-nav',
  templateUrl: './header-category-nav.component.html',
  styleUrls: ['./header-category-nav.component.scss'],
})
export class HeaderCategoryNavComponent implements OnInit {
  categories: ICategory[] = [];

  constructor(private readonly backendService: BackendService) {
    this.backendService.fetchCategories()
    .then((cats) => this.categories = cats);
  }

  ngOnInit(): void {

  }
}
