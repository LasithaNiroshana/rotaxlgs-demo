import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorehomeComponent } from './storehome.component';

describe('StorehomeComponent', () => {
  let component: StorehomeComponent;
  let fixture: ComponentFixture<StorehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorehomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
