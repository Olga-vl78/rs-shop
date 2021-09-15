import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { PagesDataService } from '../../services/pages-data.service';

const MIN_SEARCH_WORD_LENGTH: number = 2;
const SEARCH_INTERVAL_SEC: number = 700;

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  @ViewChild('searchText', { static: true }) searchInput: ElementRef<HTMLInputElement> | undefined;

  isEmpty: boolean = true;


  constructor(
    private readonly router: Router,
    private readonly pagesDataService: PagesDataService
  ) { }

  ngOnInit(): void {
    this.subscribeSearchInputChanges();
  }

  get $searchItems() {
    return this.pagesDataService.$searchItems;
  }

  goToCategoriesPage() {
    this.router.navigate(['/categories']);
  }

  subscribeSearchInputChanges() {
    if (this.searchInput) {
      const inputValueChanges$ = fromEvent(this.searchInput.nativeElement, 'keyup');
      inputValueChanges$
        .pipe(
          map((event) => (event.target as HTMLInputElement).value),
          filter((value) => value.length > MIN_SEARCH_WORD_LENGTH),
          debounceTime(SEARCH_INTERVAL_SEC),
          distinctUntilChanged(),
        )
        .subscribe((val) => this.onSearchInputChange(val));
    }
  }

  onSearchInputChange(inputValue: string) {
    this.pagesDataService.getSearchItems(inputValue);
    if (inputValue) this.isEmpty = false;
    console.log(this.isEmpty)
  }

  goToItemDetailedPage(catId: string, subId: string, itemId: string) {
    this.router.navigate([`/categories/${catId}/${subId}/${itemId}`]);
  }

  clearInputValue(input: HTMLInputElement) {
    input.value = '';
    this.isEmpty = true;
    this.pagesDataService.clearItems();
  }
}
