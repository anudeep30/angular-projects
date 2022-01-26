import { TestBed } from '@angular/core/testing';

import { AppsvcService } from './appsvc.service';

describe('AppsvcService', () => {
  let service: AppsvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppsvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
