import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFeeReceiptComponent } from './student-fee-receipt.component';

describe('StudentFeeReceiptComponent', () => {
  let component: StudentFeeReceiptComponent;
  let fixture: ComponentFixture<StudentFeeReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentFeeReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFeeReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
