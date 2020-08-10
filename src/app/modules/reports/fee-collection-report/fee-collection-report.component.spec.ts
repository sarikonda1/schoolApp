import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeCollectionReportComponent } from './fee-collection-report.component';

describe('FeeCollectionReportComponent', () => {
  let component: FeeCollectionReportComponent;
  let fixture: ComponentFixture<FeeCollectionReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeCollectionReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeCollectionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
