import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolScheduleTemplateDetailsComponent } from './school-schedule-template-details.component';

describe('SchoolScheduleTemplateDetailsComponent', () => {
  let component: SchoolScheduleTemplateDetailsComponent;
  let fixture: ComponentFixture<SchoolScheduleTemplateDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolScheduleTemplateDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolScheduleTemplateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
