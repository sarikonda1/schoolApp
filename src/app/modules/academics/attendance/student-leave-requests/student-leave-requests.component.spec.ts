import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLeaveRequestsComponent } from './student-leave-requests.component';

describe('StudentLeaveRequestsComponent', () => {
  let component: StudentLeaveRequestsComponent;
  let fixture: ComponentFixture<StudentLeaveRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentLeaveRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentLeaveRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
