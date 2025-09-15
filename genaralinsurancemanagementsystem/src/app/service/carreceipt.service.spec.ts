import { TestBed } from '@angular/core/testing';

import { CarreceiptService } from './carreceipt.service';

describe('CarreceiptService', () => {
  let service: CarreceiptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarreceiptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
