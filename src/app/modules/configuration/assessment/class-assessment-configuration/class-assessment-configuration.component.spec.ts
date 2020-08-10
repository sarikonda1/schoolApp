import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassAssessmentConfigurationComponent } from './class-assessment-configuration.component';

describe('ClassAssessmentConfigurationComponent', () => {
  let component: ClassAssessmentConfigurationComponent;
  let fixture: ComponentFixture<ClassAssessmentConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassAssessmentConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassAssessmentConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
