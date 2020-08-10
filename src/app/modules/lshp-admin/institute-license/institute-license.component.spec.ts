import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteLicenseComponent } from './institute-license.component';

describe('InstituteLicenseComponent', () => {
  let component: InstituteLicenseComponent;
  let fixture: ComponentFixture<InstituteLicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
