import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRollnumberManagementComponent } from './student-rollnumber-management.component';

describe('StudentRollnumberManagementComponent', () => {
  let component: StudentRollnumberManagementComponent;
  let fixture: ComponentFixture<StudentRollnumberManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentRollnumberManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRollnumberManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
