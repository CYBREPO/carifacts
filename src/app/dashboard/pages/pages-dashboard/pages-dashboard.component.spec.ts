import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesDashboardComponent } from './pages-dashboard.component';

describe('PagesDashboardComponent', () => {
  let component: PagesDashboardComponent;
  let fixture: ComponentFixture<PagesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
