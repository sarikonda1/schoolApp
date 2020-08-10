import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropoutsComponent } from './dropouts.component';

describe('DropoutsComponent', () => {
  let component: DropoutsComponent;
  let fixture: ComponentFixture<DropoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
