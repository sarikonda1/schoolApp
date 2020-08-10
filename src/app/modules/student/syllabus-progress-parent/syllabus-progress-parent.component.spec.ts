import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusProgressParentComponent } from './syllabus-progress-parent.component';

describe('SyllabusProgressParentComponent', () => {
  let component: SyllabusProgressParentComponent;
  let fixture: ComponentFixture<SyllabusProgressParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyllabusProgressParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyllabusProgressParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
