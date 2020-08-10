import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationConfigurationComponent } from './communication-configuration.component';

describe('CommunicationConfigurationComponent', () => {
  let component: CommunicationConfigurationComponent;
  let fixture: ComponentFixture<CommunicationConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
