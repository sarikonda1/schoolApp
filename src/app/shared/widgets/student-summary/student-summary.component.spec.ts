import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSummaryComponent } from './student-summary.component';

describe('StudentSummaryComponent', () => {
  let component: StudentSummaryComponent;
  let fixture: ComponentFixture<StudentSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
