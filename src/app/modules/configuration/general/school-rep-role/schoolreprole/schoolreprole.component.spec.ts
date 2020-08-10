import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolRepRoleComponent } from './schoolreprole.component';

describe('SchoolreproleComponent', () => {
  let component: SchoolRepRoleComponent;
  let fixture: ComponentFixture<SchoolRepRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolRepRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolRepRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
