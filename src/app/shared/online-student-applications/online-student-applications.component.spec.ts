import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineStudentApplicationsComponent } from './online-student-applications.component';

describe('OnlineStudentApplicationsComponent', () => {
  let component: OnlineStudentApplicationsComponent;
  let fixture: ComponentFixture<OnlineStudentApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineStudentApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineStudentApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
