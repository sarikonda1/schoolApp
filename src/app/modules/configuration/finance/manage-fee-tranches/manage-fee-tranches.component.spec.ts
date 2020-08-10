import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFeeTranchesComponent } from './manage-fee-tranches.component';

describe('ManageFeeTranchesComponent', () => {
  let component: ManageFeeTranchesComponent;
  let fixture: ComponentFixture<ManageFeeTranchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageFeeTranchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageFeeTranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
