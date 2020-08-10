import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInformationDetailsComponent } from './student-information-details.component';

describe('StudentInformationDetailsComponent', () => {
  let component: StudentInformationDetailsComponent;
  let fixture: ComponentFixture<StudentInformationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentInformationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentInformationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
