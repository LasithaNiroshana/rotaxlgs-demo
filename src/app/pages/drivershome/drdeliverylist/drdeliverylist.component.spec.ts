import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrdeliverylistComponent } from './drdeliverylist.component';

describe('DrdeliverylistComponent', () => {
  let component: DrdeliverylistComponent;
  let fixture: ComponentFixture<DrdeliverylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrdeliverylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrdeliverylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
