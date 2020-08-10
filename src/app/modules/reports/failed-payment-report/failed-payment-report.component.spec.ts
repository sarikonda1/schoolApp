import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedPaymentReportComponent } from './failed-payment-report.component';

describe('FailedPaymentReportComponent', () => {
  let component: FailedPaymentReportComponent;
  let fixture: ComponentFixture<FailedPaymentReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailedPaymentReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedPaymentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
