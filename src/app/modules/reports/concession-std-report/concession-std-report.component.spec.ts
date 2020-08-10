import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcessionStdReportComponent } from './concession-std-report.component';

describe('ConcessionStdReportComponent', () => {
  let component: ConcessionStdReportComponent;
  let fixture: ComponentFixture<ConcessionStdReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcessionStdReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcessionStdReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
