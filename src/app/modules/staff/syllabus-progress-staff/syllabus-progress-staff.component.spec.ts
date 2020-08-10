import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusProgressStaffComponent } from './syllabus-progress-staff.component';

describe('SyllabusProgressStaffComponent', () => {
  let component: SyllabusProgressStaffComponent;
  let fixture: ComponentFixture<SyllabusProgressStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyllabusProgressStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyllabusProgressStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
