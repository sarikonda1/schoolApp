import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSummaryComponent } from './class-summary.component';

describe('ClassSummaryComponent', () => {
  let component: ClassSummaryComponent;
  let fixture: ComponentFixture<ClassSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
