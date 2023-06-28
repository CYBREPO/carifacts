import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCategoryCarDetailsComponent } from './single-category-car-details.component';

describe('SingleCategoryCarDetailsComponent', () => {
  let component: SingleCategoryCarDetailsComponent;
  let fixture: ComponentFixture<SingleCategoryCarDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCategoryCarDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleCategoryCarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
