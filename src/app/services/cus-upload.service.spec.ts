import { TestBed } from '@angular/core/testing';

import { CusUploadService } from './cus-upload.service';

describe('CusUploadService', () => {
  let service: CusUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CusUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
