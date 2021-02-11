import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminstatcard2Component } from './adminstatcard2.component';

describe('Adminstatcard2Component', () => {
  let component: Adminstatcard2Component;
  let fixture: ComponentFixture<Adminstatcard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Adminstatcard2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Adminstatcard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
