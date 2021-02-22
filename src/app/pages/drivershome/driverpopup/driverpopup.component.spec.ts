import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:src/app/pages/drivershome/deliverylist/deliverylist.component.spec.ts
import { DeliverylistComponent } from './deliverylist.component';

describe('DeliverylistComponent', () => {
  let component: DeliverylistComponent;
  let fixture: ComponentFixture<DeliverylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverylistComponent ]
=======
import { DriverpopupComponent } from './driverpopup.component';

describe('DriverpopupComponent', () => {
  let component: DriverpopupComponent;
  let fixture: ComponentFixture<DriverpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverpopupComponent ]
>>>>>>> daf923e88bea9d3d73b6f7224b638e0978adab4c:src/app/pages/drivershome/driverpopup/driverpopup.component.spec.ts
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<< HEAD:src/app/pages/drivershome/deliverylist/deliverylist.component.spec.ts
    fixture = TestBed.createComponent(DeliverylistComponent);
=======
    fixture = TestBed.createComponent(DriverpopupComponent);
>>>>>>> daf923e88bea9d3d73b6f7224b638e0978adab4c:src/app/pages/drivershome/driverpopup/driverpopup.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
