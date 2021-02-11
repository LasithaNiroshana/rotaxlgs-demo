import { TestBed } from '@angular/core/testing';

import { SalesagentsService } from './salesagents.service';

describe('SalesagentsService', () => {
  let service: SalesagentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesagentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
