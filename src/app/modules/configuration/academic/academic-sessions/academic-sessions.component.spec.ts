import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicSessionsComponent } from './academic-sessions.component';

describe('AcademicSessionsComponent', () => {
  let component: AcademicSessionsComponent;
  let fixture: ComponentFixture<AcademicSessionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicSessionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
