import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveJobApplicationComponent } from './approve-job-application.component';

describe('ApproveJobApplicationComponent', () => {
  let component: ApproveJobApplicationComponent;
  let fixture: ComponentFixture<ApproveJobApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveJobApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveJobApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
