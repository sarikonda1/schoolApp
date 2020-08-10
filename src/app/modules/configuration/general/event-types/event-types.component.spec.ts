import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTypesComponent } from './event-types.component';

describe('EventTypesComponent', () => {
  let component: EventTypesComponent;
  let fixture: ComponentFixture<EventTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
