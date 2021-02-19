import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesagenthometabelComponent } from './salesagenthometabel.component';

describe('SalesagenthometabelComponent', () => {
  let component: SalesagenthometabelComponent;
  let fixture: ComponentFixture<SalesagenthometabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesagenthometabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesagenthometabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
