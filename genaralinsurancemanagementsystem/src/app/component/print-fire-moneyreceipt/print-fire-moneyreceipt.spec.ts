import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintFireMoneyreceipt } from './print-fire-moneyreceipt';

describe('PrintFireMoneyreceipt', () => {
  let component: PrintFireMoneyreceipt;
  let fixture: ComponentFixture<PrintFireMoneyreceipt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrintFireMoneyreceipt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintFireMoneyreceipt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
