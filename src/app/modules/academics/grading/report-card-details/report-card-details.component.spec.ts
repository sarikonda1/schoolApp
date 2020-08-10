import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCardDetailsComponent } from './report-card-details.component';

describe('ReportCardDetailsComponent', () => {
  let component: ReportCardDetailsComponent;
  let fixture: ComponentFixture<ReportCardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportCardDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
