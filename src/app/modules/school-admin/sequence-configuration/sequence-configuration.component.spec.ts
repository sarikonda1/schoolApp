import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SequenceConfigurationComponent } from './sequence-configuration.component';

describe('SequenceConfigurationComponent', () => {
  let component: SequenceConfigurationComponent;
  let fixture: ComponentFixture<SequenceConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SequenceConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequenceConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
