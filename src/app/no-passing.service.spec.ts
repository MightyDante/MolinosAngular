import { TestBed } from '@angular/core/testing';

import { NoPassingService } from './no-passing.service';

describe('NoPassingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoPassingService = TestBed.get(NoPassingService);
    expect(service).toBeTruthy();
  });
});
