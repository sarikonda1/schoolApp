import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeConcessionGroupComponent } from './fee-concession-group.component';

describe('FeeConcessionGroupComponent', () => {
  let component: FeeConcessionGroupComponent;
  let fixture: ComponentFixture<FeeConcessionGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeConcessionGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeConcessionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
