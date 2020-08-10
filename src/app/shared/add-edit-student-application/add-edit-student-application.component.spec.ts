import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditStudentApplicationComponent } from './add-edit-student-application.component';

describe('AddEditStudentApplicationComponent', () => {
  let component: AddEditStudentApplicationComponent;
  let fixture: ComponentFixture<AddEditStudentApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditStudentApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditStudentApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
