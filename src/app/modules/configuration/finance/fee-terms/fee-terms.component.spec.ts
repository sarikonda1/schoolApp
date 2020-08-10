import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeTermsComponent } from './fee-terms.component';

describe('FeeTermsComponent', () => {
  let component: FeeTermsComponent;
  let fixture: ComponentFixture<FeeTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
