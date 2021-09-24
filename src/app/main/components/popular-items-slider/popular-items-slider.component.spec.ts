import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularItemsSliderComponent } from './popular-items-slider.component';

describe('PopularItemsSliderComponent', () => {
  let component: PopularItemsSliderComponent;
  let fixture: ComponentFixture<PopularItemsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopularItemsSliderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularItemsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
