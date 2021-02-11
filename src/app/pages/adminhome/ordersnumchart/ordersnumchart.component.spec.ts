import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersnumchartComponent } from './ordersnumchart.component';

describe('OrdersnumchartComponent', () => {
  let component: OrdersnumchartComponent;
  let fixture: ComponentFixture<OrdersnumchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersnumchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersnumchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
