import { TestBed } from '@angular/core/testing';

import { StorekeeperGuard } from './storekeeper.guard';

describe('StorekeeperGuard', () => {
  let guard: StorekeeperGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StorekeeperGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
