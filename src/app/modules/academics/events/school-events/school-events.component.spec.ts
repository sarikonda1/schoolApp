import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolEventsComponent } from './school-events.component';

describe('SchoolEventsComponent', () => {
  let component: SchoolEventsComponent;
  let fixture: ComponentFixture<SchoolEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
