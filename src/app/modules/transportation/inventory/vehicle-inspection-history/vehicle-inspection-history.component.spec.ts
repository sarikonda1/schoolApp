import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleInspectionHistoryComponent } from './vehicle-inspection-history.component';

describe('VehicleInspectionHistoryComponent', () => {
  let component: VehicleInspectionHistoryComponent;
  let fixture: ComponentFixture<VehicleInspectionHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleInspectionHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleInspectionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
