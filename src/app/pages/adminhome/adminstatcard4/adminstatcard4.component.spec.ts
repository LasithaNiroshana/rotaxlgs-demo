import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminstatcard4Component } from './adminstatcard4.component';

describe('Adminstatcard4Component', () => {
  let component: Adminstatcard4Component;
  let fixture: ComponentFixture<Adminstatcard4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Adminstatcard4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Adminstatcard4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
