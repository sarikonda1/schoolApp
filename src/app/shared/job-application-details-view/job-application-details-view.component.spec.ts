import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationDetailsViewComponent } from './job-application-details-view.component';

describe('JobApplicationDetailsViewComponent', () => {
  let component: JobApplicationDetailsViewComponent;
  let fixture: ComponentFixture<JobApplicationDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobApplicationDetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobApplicationDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
