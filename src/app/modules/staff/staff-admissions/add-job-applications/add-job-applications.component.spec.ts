import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobApplicationsComponent } from './add-job-applications.component';

describe('AddJobApplicationsComponent', () => {
  let component: AddJobApplicationsComponent;
  let fixture: ComponentFixture<AddJobApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJobApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJobApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
