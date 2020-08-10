import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInstitutionComponent } from './new-institution.component';

describe('NewInstitutionComponent', () => {
  let component: NewInstitutionComponent;
  let fixture: ComponentFixture<NewInstitutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewInstitutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
