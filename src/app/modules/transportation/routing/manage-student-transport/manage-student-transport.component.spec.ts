import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageStudentTransportComponent } from './manage-student-transport.component';

describe('ManageStudentTransportComponent', () => {
  let component: ManageStudentTransportComponent;
  let fixture: ComponentFixture<ManageStudentTransportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageStudentTransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageStudentTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
