import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Showpaymentdetails } from './showpaymentdetails';

describe('Showpaymentdetails', () => {
  let component: Showpaymentdetails;
  let fixture: ComponentFixture<Showpaymentdetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Showpaymentdetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Showpaymentdetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
