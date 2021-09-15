import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderCategoryNavComponent } from './header-category-nav.component';


describe('CategoryNavComponent', () => {
  let component: HeaderCategoryNavComponent;
  let fixture: ComponentFixture<HeaderCategoryNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderCategoryNavComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCategoryNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
