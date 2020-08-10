import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeTypeTranchesComponent } from './fee-type-tranches.component';

describe('FeeTypeTranchesComponent', () => {
  let component: FeeTypeTranchesComponent;
  let fixture: ComponentFixture<FeeTypeTranchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeTypeTranchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeTypeTranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
