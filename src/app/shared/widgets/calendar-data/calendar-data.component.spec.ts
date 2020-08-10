import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarDataComponent } from './calendar-data.component';

describe('CalendarDataComponent', () => {
  let component: CalendarDataComponent;
  let fixture: ComponentFixture<CalendarDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
