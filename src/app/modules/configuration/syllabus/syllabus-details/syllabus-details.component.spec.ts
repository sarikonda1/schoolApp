import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusDetailsComponent } from './syllabus-details.component';

describe('SyllabusDetailsComponent', () => {
  let component: SyllabusDetailsComponent;
  let fixture: ComponentFixture<SyllabusDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyllabusDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyllabusDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
