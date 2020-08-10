import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualClassRoomComponent } from './virtual-class-room.component';

describe('VirtualClassRoomComponent', () => {
  let component: VirtualClassRoomComponent;
  let fixture: ComponentFixture<VirtualClassRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualClassRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualClassRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
