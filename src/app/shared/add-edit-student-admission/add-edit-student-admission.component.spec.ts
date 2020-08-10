import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditStudentAdmissionComponent } from './add-edit-student-admission.component';

describe('AddEditStudentAdmissionComponent', () => {
  let component: AddEditStudentAdmissionComponent;
  let fixture: ComponentFixture<AddEditStudentAdmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditStudentAdmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditStudentAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
