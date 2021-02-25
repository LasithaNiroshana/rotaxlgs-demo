import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicledltdialogComponent } from './vehicledltdialog.component';

describe('VehicledltdialogComponent', () => {
  let component: VehicledltdialogComponent;
  let fixture: ComponentFixture<VehicledltdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicledltdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicledltdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
