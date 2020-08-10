import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGradingComponent } from './test-grading.component';

describe('TestGradingComponent', () => {
  let component: TestGradingComponent;
  let fixture: ComponentFixture<TestGradingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestGradingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
