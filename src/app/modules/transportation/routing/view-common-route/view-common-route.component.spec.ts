import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCommonRouteComponent } from './view-common-route.component';

describe('ViewCommonRouteComponent', () => {
  let component: ViewCommonRouteComponent;
  let fixture: ComponentFixture<ViewCommonRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCommonRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCommonRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
