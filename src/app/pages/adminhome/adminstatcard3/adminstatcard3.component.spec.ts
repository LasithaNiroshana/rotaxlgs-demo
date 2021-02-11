import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminstatcard3Component } from './adminstatcard3.component';

describe('Adminstatcard3Component', () => {
  let component: Adminstatcard3Component;
  let fixture: ComponentFixture<Adminstatcard3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Adminstatcard3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Adminstatcard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
