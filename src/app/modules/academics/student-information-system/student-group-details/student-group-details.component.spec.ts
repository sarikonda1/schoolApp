import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGroupDetailsComponent } from './student-group-details.component';

describe('StudentGroupDetailsComponent', () => {
  let component: StudentGroupDetailsComponent;
  let fixture: ComponentFixture<StudentGroupDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentGroupDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentGroupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
