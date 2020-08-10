import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolFacilityRepresentativesComponent } from './school-facility-representatives.component';

describe('SchoolFacilityRepresentativesComponent', () => {
  let component: SchoolFacilityRepresentativesComponent;
  let fixture: ComponentFixture<SchoolFacilityRepresentativesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolFacilityRepresentativesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolFacilityRepresentativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
