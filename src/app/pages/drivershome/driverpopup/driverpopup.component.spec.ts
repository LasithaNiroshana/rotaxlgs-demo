import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverpopupComponent } from './driverpopup.component';

describe('DriverpopupComponent', () => {
  let component: DriverpopupComponent;
  let fixture: ComponentFixture<DriverpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
