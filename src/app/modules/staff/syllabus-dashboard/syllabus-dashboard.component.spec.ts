import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusDashboardComponent } from './syllabus-dashboard.component';

describe('SyllabusDashboardComponent', () => {
  let component: SyllabusDashboardComponent;
  let fixture: ComponentFixture<SyllabusDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyllabusDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyllabusDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
