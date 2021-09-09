import { Component, Input, OnInit } from '@angular/core';
import { ISubcategory } from 'src/app/shared/models/subcategory.model';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent implements OnInit {
  @Input()
  subcategory: ISubcategory | undefined = undefined;



  constructor() { }

  ngOnInit(): void { }

}
