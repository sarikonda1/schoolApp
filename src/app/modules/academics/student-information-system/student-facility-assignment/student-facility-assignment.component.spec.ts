import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFacilityAssignmentComponent } from './student-facility-assignment.component';

describe('StudentFacilityAssignmentComponent', () => {
  let component: StudentFacilityAssignmentComponent;
  let fixture: ComponentFixture<StudentFacilityAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentFacilityAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFacilityAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
