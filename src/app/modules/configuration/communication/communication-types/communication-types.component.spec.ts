import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationTypesComponent } from './communication-types.component';

describe('CommunicationTypesComponent', () => {
  let component: CommunicationTypesComponent;
  let fixture: ComponentFixture<CommunicationTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
