import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentCategoriesComponent } from './assessment-categories.component';

describe('AssessmentCategoriesComponent', () => {
  let component: AssessmentCategoriesComponent;
  let fixture: ComponentFixture<AssessmentCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
