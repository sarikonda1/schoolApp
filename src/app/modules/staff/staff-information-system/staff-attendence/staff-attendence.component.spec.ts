import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffAttendenceComponent } from './staff-attendence.component';

describe('StaffAttendenceComponent', () => {
  let component: StaffAttendenceComponent;
  let fixture: ComponentFixture<StaffAttendenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffAttendenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffAttendenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
