import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworksAssignmentsComponent } from './homeworks-assignments.component';

describe('HomeworksAssignmentsComponent', () => {
  let component: HomeworksAssignmentsComponent;
  let fixture: ComponentFixture<HomeworksAssignmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworksAssignmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworksAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
