import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCorrectionReportComponent } from './payment-correction-report.component';

describe('PaymentCorrectionReportComponent', () => {
  let component: PaymentCorrectionReportComponent;
  let fixture: ComponentFixture<PaymentCorrectionReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentCorrectionReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentCorrectionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
