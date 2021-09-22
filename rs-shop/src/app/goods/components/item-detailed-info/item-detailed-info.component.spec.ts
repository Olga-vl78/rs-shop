import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailedInfoComponent } from './item-detailed-info.component';

describe('ItemDetailedInfoComponent', () => {
  let component: ItemDetailedInfoComponent;
  let fixture: ComponentFixture<ItemDetailedInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemDetailedInfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
