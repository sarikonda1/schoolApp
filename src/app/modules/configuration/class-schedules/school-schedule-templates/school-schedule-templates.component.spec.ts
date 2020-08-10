import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolScheduleTemplatesComponent } from './school-schedule-templates.component';

describe('SchoolScheduleTemplatesComponent', () => {
  let component: SchoolScheduleTemplatesComponent;
  let fixture: ComponentFixture<SchoolScheduleTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolScheduleTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolScheduleTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
