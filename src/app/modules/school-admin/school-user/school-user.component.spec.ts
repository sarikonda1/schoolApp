import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SchoolUserComponent } from './school-user.component';


describe('SchoolUserComponent', () => {
  let component: SchoolUserComponent;
  let fixture: ComponentFixture<SchoolUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
