import { TestBed } from '@angular/core/testing';

import { HttpapicallService } from './httpapicall.service';

describe('HttpapicallService', () => {
  let service: HttpapicallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpapicallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
