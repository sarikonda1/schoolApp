import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTimetablesComponent } from './class-timetables.component';

describe('ClassTimetablesComponent', () => {
  let component: ClassTimetablesComponent;
  let fixture: ComponentFixture<ClassTimetablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassTimetablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassTimetablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
