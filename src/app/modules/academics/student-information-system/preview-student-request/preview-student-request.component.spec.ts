import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewStudentRequestComponent } from './preview-student-request.component';

describe('PreviewStudentRequestComponent', () => {
  let component: PreviewStudentRequestComponent;
  let fixture: ComponentFixture<PreviewStudentRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewStudentRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewStudentRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
