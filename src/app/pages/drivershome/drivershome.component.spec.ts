import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivershomeComponent } from './drivershome.component';

describe('DrivershomeComponent', () => {
  let component: DrivershomeComponent;
  let fixture: ComponentFixture<DrivershomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrivershomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivershomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
