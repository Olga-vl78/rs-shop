import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPicturesSliderComponent } from './item-pictures-slider.component';

describe('ItemPicturesSliderComponent', () => {
  let component: ItemPicturesSliderComponent;
  let fixture: ComponentFixture<ItemPicturesSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemPicturesSliderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPicturesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
