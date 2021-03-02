import { TestBed } from '@angular/core/testing';

import { SalesagentGuard } from './salesagent.guard';

describe('SalesagentGuard', () => {
  let guard: SalesagentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SalesagentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
