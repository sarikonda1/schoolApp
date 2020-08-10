import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInvoiceDetailsComponent } from './student-invoice-details.component';

describe('StudentInvoiceDetailsComponent', () => {
  let component: StudentInvoiceDetailsComponent;
  let fixture: ComponentFixture<StudentInvoiceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentInvoiceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentInvoiceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
