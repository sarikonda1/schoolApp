import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradingTermsComponent } from './grading-terms.component';

describe('GradingTermsComponent', () => {
  let component: GradingTermsComponent;
  let fixture: ComponentFixture<GradingTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradingTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradingTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
