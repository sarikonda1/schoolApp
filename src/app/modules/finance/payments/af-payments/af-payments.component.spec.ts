import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfPaymentsComponent } from './af-payments.component';

describe('AfPaymentsComponent', () => {
  let component: AfPaymentsComponent;
  let fixture: ComponentFixture<AfPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
