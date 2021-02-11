import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsalesagentsComponent } from './addsalesagents.component';

describe('AddsalesagentsComponent', () => {
  let component: AddsalesagentsComponent;
  let fixture: ComponentFixture<AddsalesagentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsalesagentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsalesagentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
