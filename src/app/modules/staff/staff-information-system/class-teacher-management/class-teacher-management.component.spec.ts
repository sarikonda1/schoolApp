import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTeacherManagementComponent } from './class-teacher-management.component';

describe('ClassTeacherManagementComponent', () => {
  let component: ClassTeacherManagementComponent;
  let fixture: ComponentFixture<ClassTeacherManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassTeacherManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassTeacherManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
