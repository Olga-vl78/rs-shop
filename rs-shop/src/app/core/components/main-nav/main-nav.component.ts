import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void { }

  goToCategoriesPage() {
    this.router.navigate(['/categories']);
  }
}
