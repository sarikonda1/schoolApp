import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceAdjustmentTypeComponent } from './invoice-adjustment-type.component';

describe('InvoiceAdjustmentTypeComponent', () => {
  let component: InvoiceAdjustmentTypeComponent;
  let fixture: ComponentFixture<InvoiceAdjustmentTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceAdjustmentTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceAdjustmentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
