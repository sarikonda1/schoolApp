import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicGradesComponent } from './academic-grades.component';

describe('AcademicGradesComponent', () => {
  let component: AcademicGradesComponent;
  let fixture: ComponentFixture<AcademicGradesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicGradesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
