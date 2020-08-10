import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageTransmissionsComponent } from './message-transmissions.component';

describe('MessageTransmissionsComponent', () => {
  let component: MessageTransmissionsComponent;
  let fixture: ComponentFixture<MessageTransmissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageTransmissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageTransmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
