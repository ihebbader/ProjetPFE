import { TestBed } from '@angular/core/testing';

import { SatatisticService } from './satatistic.service';

describe('SatatisticService', () => {
  let service: SatatisticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SatatisticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
