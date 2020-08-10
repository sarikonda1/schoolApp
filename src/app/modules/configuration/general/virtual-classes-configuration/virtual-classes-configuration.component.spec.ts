import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualClassesConfigurationComponent } from './virtual-classes-configuration.component';

describe('VirtualClassesConfigurationComponent', () => {
  let component: VirtualClassesConfigurationComponent;
  let fixture: ComponentFixture<VirtualClassesConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualClassesConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualClassesConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
