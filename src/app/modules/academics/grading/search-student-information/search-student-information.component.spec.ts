import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStudentInformationComponent } from './search-student-information.component';

describe('SearchStudentInformationComponent', () => {
  let component: SearchStudentInformationComponent;
  let fixture: ComponentFixture<SearchStudentInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchStudentInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchStudentInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
