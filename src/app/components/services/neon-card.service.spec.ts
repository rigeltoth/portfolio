import { TestBed } from '@angular/core/testing';

import { NeonCardService } from './neon-card.service';

describe('NeonCardService', () => {
  let service: NeonCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeonCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
