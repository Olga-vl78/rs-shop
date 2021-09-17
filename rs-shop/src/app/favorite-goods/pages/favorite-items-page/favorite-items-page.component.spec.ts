import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteItemsPageComponent } from './favorite-items-page.component';

describe('FavoriteItemsPageComponent', () => {
  let component: FavoriteItemsPageComponent;
  let fixture: ComponentFixture<FavoriteItemsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteItemsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteItemsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
