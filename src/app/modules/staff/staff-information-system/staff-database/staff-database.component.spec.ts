import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffDatabaseComponent } from './staff-database.component';

describe('StaffDatabaseComponent', () => {
  let component: StaffDatabaseComponent;
  let fixture: ComponentFixture<StaffDatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffDatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
