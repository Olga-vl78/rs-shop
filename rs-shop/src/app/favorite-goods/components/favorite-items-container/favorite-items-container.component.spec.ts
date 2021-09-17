import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteItemsContainerComponent } from './favorite-items-container.component';

describe('FavoriteItemsContainerComponent', () => {
  let component: FavoriteItemsContainerComponent;
  let fixture: ComponentFixture<FavoriteItemsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteItemsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteItemsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
