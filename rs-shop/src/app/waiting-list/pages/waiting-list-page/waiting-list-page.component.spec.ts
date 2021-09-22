import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingListPageComponent } from './waiting-list-page.component';

describe('WaitingListPageComponent', () => {
  let component: WaitingListPageComponent;
  let fixture: ComponentFixture<WaitingListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaitingListPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
