import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestScheduleComponent } from './test-schedule.component';

describe('TestScheduleComponent', () => {
  let component: TestScheduleComponent;
  let fixture: ComponentFixture<TestScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
