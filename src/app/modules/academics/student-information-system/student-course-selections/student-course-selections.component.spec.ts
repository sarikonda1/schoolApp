import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCourseSelectionsComponent } from './student-course-selections.component';

describe('StudentCourseSelectionsComponent', () => {
  let component: StudentCourseSelectionsComponent;
  let fixture: ComponentFixture<StudentCourseSelectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCourseSelectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCourseSelectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
