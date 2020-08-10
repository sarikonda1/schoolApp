import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransportSchedulesComponent } from './view-transport-schedules.component';

describe('ViewTransportSchedulesComponent', () => {
  let component: ViewTransportSchedulesComponent;
  let fixture: ComponentFixture<ViewTransportSchedulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTransportSchedulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTransportSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
