import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSchedulesComponent } from './class-schedules.component';

describe('ClassSchedulesComponent', () => {
  let component: ClassSchedulesComponent;
  let fixture: ComponentFixture<ClassSchedulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassSchedulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
