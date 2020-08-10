import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentApplicationCategoriesComponent } from './student-application-categories.component';

describe('StudentApplicationCategoriesComponent', () => {
  let component: StudentApplicationCategoriesComponent;
  let fixture: ComponentFixture<StudentApplicationCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentApplicationCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentApplicationCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
