import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsalesagentsComponent } from './viewsalesagents.component';

describe('ViewsalesagentsComponent', () => {
  let component: ViewsalesagentsComponent;
  let fixture: ComponentFixture<ViewsalesagentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsalesagentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsalesagentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
