import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailedPageComponent } from './item-detailed-page.component';

describe('ItemDetailedPageComponent', () => {
  let component: ItemDetailedPageComponent;
  let fixture: ComponentFixture<ItemDetailedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDetailedPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
