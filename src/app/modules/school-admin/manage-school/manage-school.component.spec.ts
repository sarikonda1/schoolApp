import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSchoolComponent } from './manage-school.component';

describe('ManageSchoolComponent', () => {
  let component: ManageSchoolComponent;
  let fixture: ComponentFixture<ManageSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
