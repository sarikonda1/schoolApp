import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPaymentCorrectionComponent } from './add-edit-payment-correction.component';

describe('AddEditPaymentCorrectionComponent', () => {
  let component: AddEditPaymentCorrectionComponent;
  let fixture: ComponentFixture<AddEditPaymentCorrectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditPaymentCorrectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPaymentCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
