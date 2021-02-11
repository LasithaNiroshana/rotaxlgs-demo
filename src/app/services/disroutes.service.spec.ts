import { TestBed } from '@angular/core/testing';

import { DisroutesService } from './disroutes.service';

describe('DisroutesService', () => {
  let service: DisroutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisroutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
