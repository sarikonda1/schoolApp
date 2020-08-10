import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusScheduleComponent } from './syllabus-schedule.component';

describe('SyllabusScheduleComponent', () => {
  let component: SyllabusScheduleComponent;
  let fixture: ComponentFixture<SyllabusScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyllabusScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyllabusScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
