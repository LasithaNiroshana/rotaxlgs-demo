import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutetableComponent } from './routetable.component';

describe('RoutetableComponent', () => {
  let component: RoutetableComponent;
  let fixture: ComponentFixture<RoutetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutetableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
