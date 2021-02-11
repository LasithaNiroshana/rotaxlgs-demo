import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminstatcard1Component } from './adminstatcard1.component';

describe('Adminstatcard1Component', () => {
  let component: Adminstatcard1Component;
  let fixture: ComponentFixture<Adminstatcard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Adminstatcard1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Adminstatcard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
