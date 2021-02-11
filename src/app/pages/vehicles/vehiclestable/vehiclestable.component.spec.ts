import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclestableComponent } from './vehiclestable.component';

describe('VehiclestableComponent', () => {
  let component: VehiclestableComponent;
  let fixture: ComponentFixture<VehiclestableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclestableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclestableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
