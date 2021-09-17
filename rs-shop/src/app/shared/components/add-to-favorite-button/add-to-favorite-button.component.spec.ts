import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToFavoriteButtonComponent } from './add-to-favorite-button.component';

describe('AddToFavoriteButtonComponent', () => {
  let component: AddToFavoriteButtonComponent;
  let fixture: ComponentFixture<AddToFavoriteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToFavoriteButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToFavoriteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
