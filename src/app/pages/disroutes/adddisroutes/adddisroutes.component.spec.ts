import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddisroutesComponent } from './adddisroutes.component';

describe('AdddisroutesComponent', () => {
  let component: AdddisroutesComponent;
  let fixture: ComponentFixture<AdddisroutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddisroutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddisroutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
