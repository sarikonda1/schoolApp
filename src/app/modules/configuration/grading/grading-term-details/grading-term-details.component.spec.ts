import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradingTermDetailsComponent } from './grading-term-details.component';

describe('GradingTermDetailsComponent', () => {
  let component: GradingTermDetailsComponent;
  let fixture: ComponentFixture<GradingTermDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradingTermDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradingTermDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
