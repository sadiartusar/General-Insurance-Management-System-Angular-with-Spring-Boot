import { TestBed } from '@angular/core/testing';

import { CarbillmodelService } from './carbillmodel.service';

describe('CarbillmodelService', () => {
  let service: CarbillmodelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarbillmodelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
