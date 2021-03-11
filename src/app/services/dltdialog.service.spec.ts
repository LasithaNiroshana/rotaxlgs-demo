import { TestBed } from '@angular/core/testing';

import { DltdialogService } from './dltdialog.service';

describe('DltdialogService', () => {
  let service: DltdialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DltdialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
