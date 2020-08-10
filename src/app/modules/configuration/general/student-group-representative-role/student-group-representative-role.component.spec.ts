import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGroupRepresentativeRoleComponent } from './student-group-representative-role.component';

describe('StudentGroupRepresentativeRoleComponent', () => {
  let component: StudentGroupRepresentativeRoleComponent;
  let fixture: ComponentFixture<StudentGroupRepresentativeRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentGroupRepresentativeRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentGroupRepresentativeRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
