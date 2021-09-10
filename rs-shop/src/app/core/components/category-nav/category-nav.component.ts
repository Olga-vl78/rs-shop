import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/shared/models/category.model';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-category-nav',
  templateUrl: './category-nav.component.html',
  styleUrls: ['./category-nav.component.scss']
})
export class CategoryNavComponent implements OnInit {
  categories: ICategory[] = [];

  constructor(
    private readonly backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.fetchCategories().then((cats) => this.categories = cats);
  }
}
