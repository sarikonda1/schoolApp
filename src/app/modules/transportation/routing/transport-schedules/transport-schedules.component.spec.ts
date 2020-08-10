import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportSchedulesComponent } from './transport-schedules.component';

describe('TransportSchedulesComponent', () => {
  let component: TransportSchedulesComponent;
  let fixture: ComponentFixture<TransportSchedulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportSchedulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
