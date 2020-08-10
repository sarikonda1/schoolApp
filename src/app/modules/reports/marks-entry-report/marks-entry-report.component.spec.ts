import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksEntryReportComponent } from './marks-entry-report.component';

describe('MarksEntryReportComponent', () => {
  let component: MarksEntryReportComponent;
  let fixture: ComponentFixture<MarksEntryReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarksEntryReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarksEntryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
