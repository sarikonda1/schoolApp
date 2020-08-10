import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassAssessmentGradesComponent } from './class-assessment-grades.component';

describe('TestScheduleComponent', () => {
  let component: ClassAssessmentGradesComponent;
  let fixture: ComponentFixture<ClassAssessmentGradesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassAssessmentGradesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassAssessmentGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
