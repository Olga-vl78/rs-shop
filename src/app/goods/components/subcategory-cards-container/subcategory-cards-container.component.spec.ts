import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubcategoryCardsContainerComponent } from './subcategory-cards-container.component';

describe('SubcategoryCardContainerComponent', () => {
  let component: SubcategoryCardsContainerComponent;
  let fixture: ComponentFixture<SubcategoryCardsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubcategoryCardsContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoryCardsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
