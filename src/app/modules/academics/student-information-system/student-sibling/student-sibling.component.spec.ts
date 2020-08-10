import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSiblingComponent } from './student-sibling.component';

describe('StudentSiblingComponent', () => {
  let component: StudentSiblingComponent;
  let fixture: ComponentFixture<StudentSiblingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSiblingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSiblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
