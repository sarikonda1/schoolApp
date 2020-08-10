import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleInventoryComponent } from './vehicle-inventory.component';

describe('VehicleInventoryComponent', () => {
  let component: VehicleInventoryComponent;
  let fixture: ComponentFixture<VehicleInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
