import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateStatesComponent } from './associate-states.component';

describe('AssociateStatesComponent', () => {
  let component: AssociateStatesComponent;
  let fixture: ComponentFixture<AssociateStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociateStatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssociateStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
