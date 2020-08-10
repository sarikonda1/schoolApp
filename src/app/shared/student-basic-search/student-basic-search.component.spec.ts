import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBasicSearchComponent } from './student-basic-search.component';

describe('StudentBasicSearchComponent', () => {
  let component: StudentBasicSearchComponent;
  let fixture: ComponentFixture<StudentBasicSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentBasicSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentBasicSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
