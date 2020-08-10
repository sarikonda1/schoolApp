import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkProcessComponent } from './bulk-process.component';

describe('BulkProcessComponent', () => {
  let component: BulkProcessComponent;
  let fixture: ComponentFixture<BulkProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
