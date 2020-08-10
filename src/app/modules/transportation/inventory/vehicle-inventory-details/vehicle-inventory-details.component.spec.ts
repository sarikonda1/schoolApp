import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleInventoryDetailsComponent } from './vehicle-inventory-details.component';

describe('VehicleInventoryDetailsComponent', () => {
  let component: VehicleInventoryDetailsComponent;
  let fixture: ComponentFixture<VehicleInventoryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleInventoryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleInventoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
