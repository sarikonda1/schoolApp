import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusEntryDetailsComponent } from './syllabus-entry-details.component';

describe('SyllabusEntryDetailsComponent', () => {
  let component: SyllabusEntryDetailsComponent;
  let fixture: ComponentFixture<SyllabusEntryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyllabusEntryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyllabusEntryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
