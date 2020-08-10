import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDueReportComponent } from './payment-due-report.component';

describe('PaymentDueReportComponent', () => {
  let component: PaymentDueReportComponent;
  let fixture: ComponentFixture<PaymentDueReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentDueReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDueReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
