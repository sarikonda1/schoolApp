import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LateFeeRulesComponent } from './late-fee-rules.component';

describe('LateFeeRulesComponent', () => {
  let component: LateFeeRulesComponent;
  let fixture: ComponentFixture<LateFeeRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LateFeeRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LateFeeRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
