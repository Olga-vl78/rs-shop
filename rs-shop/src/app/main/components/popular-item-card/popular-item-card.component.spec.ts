import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularItemCardComponent } from './popular-item-card.component';

describe('PopularItemCardComponent', () => {
  let component: PopularItemCardComponent;
  let fixture: ComponentFixture<PopularItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularItemCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
