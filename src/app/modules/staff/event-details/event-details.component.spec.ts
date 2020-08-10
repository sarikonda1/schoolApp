import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffEventDetailsComponent } from './event-details.component';

describe('StaffEventDetailsComponent', () => {
  let component: StaffEventDetailsComponent;
  let fixture: ComponentFixture<StaffEventDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffEventDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
