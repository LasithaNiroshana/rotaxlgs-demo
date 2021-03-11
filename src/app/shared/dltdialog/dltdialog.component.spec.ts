import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DltdialogComponent } from './dltdialog.component';

describe('DltdialogComponent', () => {
  let component: DltdialogComponent;
  let fixture: ComponentFixture<DltdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DltdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DltdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
