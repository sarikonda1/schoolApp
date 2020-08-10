import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffAttndReportComponent } from './staff-attnd-report.component';

describe('StaffAttndReportComponent', () => {
  let component: StaffAttndReportComponent;
  let fixture: ComponentFixture<StaffAttndReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffAttndReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffAttndReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
