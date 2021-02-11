import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdisroutesComponent } from './viewdisroutes.component';

describe('ViewdisroutesComponent', () => {
  let component: ViewdisroutesComponent;
  let fixture: ComponentFixture<ViewdisroutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdisroutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdisroutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
