import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransportSchedulesComponent } from './add-transport-schedules.component';

describe('AddTransportSchedulesComponent', () => {
  let component: AddTransportSchedulesComponent;
  let fixture: ComponentFixture<AddTransportSchedulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTransportSchedulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTransportSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
