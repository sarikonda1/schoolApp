import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreAddmStdApplicationReportComponent } from './pre-addm-std-application-report.component';

describe('PreAddmStdApplicationReportComponent', () => {
  let component: PreAddmStdApplicationReportComponent;
  let fixture: ComponentFixture<PreAddmStdApplicationReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreAddmStdApplicationReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreAddmStdApplicationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
