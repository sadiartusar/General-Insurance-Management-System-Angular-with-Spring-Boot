import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintCarMoneyreceipt } from './print-car-moneyreceipt';

describe('PrintCarMoneyreceipt', () => {
  let component: PrintCarMoneyreceipt;
  let fixture: ComponentFixture<PrintCarMoneyreceipt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrintCarMoneyreceipt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintCarMoneyreceipt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
