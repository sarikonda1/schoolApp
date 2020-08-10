import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusViewComponent } from './syllabus-view.component';

describe('SyllabusViewComponent', () => {
  let component: SyllabusViewComponent;
  let fixture: ComponentFixture<SyllabusViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyllabusViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyllabusViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
