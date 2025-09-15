import { TestBed } from '@angular/core/testing';

import { PolicymodelService } from './policymodel.service';

describe('PolicymodelService', () => {
  let service: PolicymodelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolicymodelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
