import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleRouteDatabaseComponent } from './vehicle-route-database.component';

describe('VehicleRouteDatabaseComponent', () => {
  let component: VehicleRouteDatabaseComponent;
  let fixture: ComponentFixture<VehicleRouteDatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleRouteDatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleRouteDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
