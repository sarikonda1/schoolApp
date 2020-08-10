import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclePollutionCheckHistoryComponent } from './vehicle-pollution-check-history.component';

describe('VehiclePollutionCheckHistoryComponent', () => {
  let component: VehiclePollutionCheckHistoryComponent;
  let fixture: ComponentFixture<VehiclePollutionCheckHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclePollutionCheckHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclePollutionCheckHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
