import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassperiodtypesComponent } from './class-period-types.component';

describe('ClassperiodtypesComponent', () => {
  let component: ClassperiodtypesComponent;
  let fixture: ComponentFixture<ClassperiodtypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassperiodtypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassperiodtypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
