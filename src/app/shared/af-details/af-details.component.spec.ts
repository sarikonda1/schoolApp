import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfDetailsComponent } from './af-details.component';

describe('AfDetailsComponent', () => {
  let component: AfDetailsComponent;
  let fixture: ComponentFixture<AfDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
