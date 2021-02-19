import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesagenthomeComponent } from './salesagenthome.component';

describe('SalesagenthomeComponent', () => {
  let component: SalesagenthomeComponent;
  let fixture: ComponentFixture<SalesagenthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesagenthomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesagenthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
