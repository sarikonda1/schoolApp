import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualClassRoomsComponent } from './virtual-class-rooms.component';

describe('VirtualClassRoomsComponent', () => {
  let component: VirtualClassRoomsComponent;
  let fixture: ComponentFixture<VirtualClassRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualClassRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualClassRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
