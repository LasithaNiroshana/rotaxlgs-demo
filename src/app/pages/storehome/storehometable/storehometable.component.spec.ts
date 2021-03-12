import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorehometableComponent } from './storehometable.component';

describe('StorehometableComponent', () => {
  let component: StorehometableComponent;
  let fixture: ComponentFixture<StorehometableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorehometableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorehometableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
