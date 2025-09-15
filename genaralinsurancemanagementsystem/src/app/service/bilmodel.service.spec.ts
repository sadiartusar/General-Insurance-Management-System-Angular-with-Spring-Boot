import { TestBed } from '@angular/core/testing';

import { BilmodelService } from './bilmodel.service';

describe('BilmodelService', () => {
  let service: BilmodelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BilmodelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
