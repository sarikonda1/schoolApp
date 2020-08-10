import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LshpAdminComponent } from './lshp-admin.component';

describe('LshpAdminComponent', () => {
  let component: LshpAdminComponent;
  let fixture: ComponentFixture<LshpAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LshpAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LshpAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
