import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeAccountsComponent } from './fee-accounts.component';

describe('FeeAccountsComponent', () => {
  let component: FeeAccountsComponent;
  let fixture: ComponentFixture<FeeAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
