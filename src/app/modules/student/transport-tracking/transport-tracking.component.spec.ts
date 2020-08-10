import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportTrackingComponent } from './transport-tracking.component';

describe('TransportTrackingComponent', () => {
  let component: TransportTrackingComponent;
  let fixture: ComponentFixture<TransportTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
