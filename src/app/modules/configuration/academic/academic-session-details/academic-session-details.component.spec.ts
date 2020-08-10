import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicSessionDetailsComponent } from './academic-session-details.component';

describe('AcademicSessionDetailsComponent', () => {
  let component: AcademicSessionDetailsComponent;
  let fixture: ComponentFixture<AcademicSessionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicSessionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicSessionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
