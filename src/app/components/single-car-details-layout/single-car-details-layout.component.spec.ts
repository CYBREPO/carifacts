import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCarDetailsLayoutComponent } from './single-car-details-layout.component';

describe('SingleCarDetailsLayoutComponent', () => {
  let component: SingleCarDetailsLayoutComponent;
  let fixture: ComponentFixture<SingleCarDetailsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCarDetailsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleCarDetailsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
