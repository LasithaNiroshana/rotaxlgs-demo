import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverstableComponent } from './driverstable.component';

describe('DriverstableComponent', () => {
  let component: DriverstableComponent;
  let fixture: ComponentFixture<DriverstableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverstableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
