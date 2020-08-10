import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfLoaderComponent } from './af-loader.component';

describe('AfLoaderComponent', () => {
  let component: AfLoaderComponent;
  let fixture: ComponentFixture<AfLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
