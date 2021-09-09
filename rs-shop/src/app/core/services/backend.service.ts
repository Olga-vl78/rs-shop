import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ICategory } from 'src/app/shared/models/category.model';
import { IGoodsItem } from 'src/app/shared/models/goods-item.model';


const BASEURL = 'http://localhost:3004';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  categoriesUrl: string = `${BASEURL}/categories`;

  constructor(private readonly http: HttpClient) {
  }

  fetchCategories() {
    return this.http.get<ICategory[]>(`${BASEURL}/categories`)
      .pipe(
        catchError(this.handleError))
      .toPromise();
  }

  fetchSearchGoods() {
    return this.http.get<ICategory>(`${BASEURL}/goods/search?text=searchQuery`)
      .pipe(
        catchError(this.handleError))
    //.toPromise();
  }

  fetchCategory(catId: string) {
    return this.http.get<ICategory>(`${BASEURL}/goods/category/${catId}`)
      .pipe(
        catchError(this.handleError))
      .toPromise();
  }

  fetchSubcategory(catId: string, subcatId: string) {
    return this.http.get<IGoodsItem[]>(`${BASEURL}/goods/category/${catId}/${subcatId}`)
      .pipe(
        catchError(this.handleError))
      .toPromise();
  }

  fetchItem(itemId: string) {
    return this.http.get<ICategory>(`${BASEURL}/goods/item/${itemId}`)
      .pipe(
        catchError(this.handleError))
    //.toPromise();
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was:`, error.error);
    }
    return throwError('Something bad happens; please try again later');
  }
}
