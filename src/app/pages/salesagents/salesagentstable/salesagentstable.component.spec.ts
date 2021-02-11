import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesagentstableComponent } from './salesagentstable.component';

describe('SalesagentstableComponent', () => {
  let component: SalesagentstableComponent;
  let fixture: ComponentFixture<SalesagentstableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesagentstableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesagentstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
