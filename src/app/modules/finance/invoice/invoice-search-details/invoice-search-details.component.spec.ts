import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceSearchDetailsComponent } from './invoice-search-details.component';

describe('InvoiceSearchDetailsComponent', () => {
  let component: InvoiceSearchDetailsComponent;
  let fixture: ComponentFixture<InvoiceSearchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceSearchDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceSearchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
