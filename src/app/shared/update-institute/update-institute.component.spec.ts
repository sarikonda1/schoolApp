import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInstituteComponent } from './update-institute.component';

describe('UpdateInstituteComponent', () => {
  let component: UpdateInstituteComponent;
  let fixture: ComponentFixture<UpdateInstituteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateInstituteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
