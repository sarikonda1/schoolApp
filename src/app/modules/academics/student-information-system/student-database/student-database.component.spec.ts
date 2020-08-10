import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDatabaseComponent } from './student-database.component';

describe('StudentDatabaseComponent', () => {
  let component: StudentDatabaseComponent;
  let fixture: ComponentFixture<StudentDatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
