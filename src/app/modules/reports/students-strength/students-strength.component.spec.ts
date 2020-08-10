import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsStrengthComponent } from './students-strength.component';

describe('StudentsStrengthComponent', () => {
  let component: StudentsStrengthComponent;
  let fixture: ComponentFixture<StudentsStrengthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsStrengthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsStrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
