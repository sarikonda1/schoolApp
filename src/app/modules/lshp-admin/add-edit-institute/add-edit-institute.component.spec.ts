import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditInstituteComponent } from './add-edit-institute.component';

describe('AddEditInstituteComponent', () => {
  let component: AddEditInstituteComponent;
  let fixture: ComponentFixture<AddEditInstituteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditInstituteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditInstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
