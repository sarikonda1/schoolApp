import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffLeaveRequestsComponent } from './staff-leave-requests.component';

describe('StaffLeaveRequestsComponent', () => {
  let component: StaffLeaveRequestsComponent;
  let fixture: ComponentFixture<StaffLeaveRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StaffLeaveRequestsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffLeaveRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
