import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindashchartComponent } from './admindashchart.component';

describe('AdmindashchartComponent', () => {
  let component: AdmindashchartComponent;
  let fixture: ComponentFixture<AdmindashchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindashchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindashchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
