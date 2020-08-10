import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStaffAdmissionFormComponent } from './add-staff-admission-form.component';

describe('AddStaffAdmissionFormComponent', () => {
  let component: AddStaffAdmissionFormComponent;
  let fixture: ComponentFixture<AddStaffAdmissionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStaffAdmissionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStaffAdmissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
