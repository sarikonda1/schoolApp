import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleServiceHistoryComponent } from './vehicle-service-history.component';

describe('VehicleServiceHistoryComponent', () => {
  let component: VehicleServiceHistoryComponent;
  let fixture: ComponentFixture<VehicleServiceHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleServiceHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleServiceHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
