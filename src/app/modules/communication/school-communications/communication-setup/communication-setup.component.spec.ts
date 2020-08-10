import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationSetupComponent } from './communication-setup.component';

describe('CommunicationSetupComponent', () => {
  let component: CommunicationSetupComponent;
  let fixture: ComponentFixture<CommunicationSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
