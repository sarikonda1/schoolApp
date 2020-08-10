import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateUserInstituteComponent } from './create-user-institute.component';



describe('CreateUserInstituteComponent', () => {
  let component: CreateUserInstituteComponent;
  let fixture: ComponentFixture<CreateUserInstituteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUserInstituteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserInstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
