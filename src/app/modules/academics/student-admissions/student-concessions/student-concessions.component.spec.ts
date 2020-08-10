import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentConcessionsComponent } from './student-concessions.component';

describe('StudentConcessionsComponent', () => {
  let component: StudentConcessionsComponent;
  let fixture: ComponentFixture<StudentConcessionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentConcessionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentConcessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
