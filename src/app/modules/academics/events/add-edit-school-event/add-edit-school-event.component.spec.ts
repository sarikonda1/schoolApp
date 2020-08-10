import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSchoolEventComponent } from './add-edit-school-event.component';

describe('AddEditSchoolEventComponent', () => {
  let component: AddEditSchoolEventComponent;
  let fixture: ComponentFixture<AddEditSchoolEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditSchoolEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSchoolEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
