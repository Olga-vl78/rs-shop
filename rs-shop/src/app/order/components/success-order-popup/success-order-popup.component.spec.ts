import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessOrderPopupComponent } from './success-order-popup.component';

describe('SuccessOrderPopupComponent', () => {
  let component: SuccessOrderPopupComponent;
  let fixture: ComponentFixture<SuccessOrderPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessOrderPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessOrderPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
