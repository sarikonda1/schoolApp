import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayemtGatewayOptionsComponent } from './payemt-gateway-options.component';

describe('PayemtGatewayOptionsComponent', () => {
  let component: PayemtGatewayOptionsComponent;
  let fixture: ComponentFixture<PayemtGatewayOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayemtGatewayOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayemtGatewayOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
