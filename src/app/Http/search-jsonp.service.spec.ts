import { TestBed } from '@angular/core/testing';

import { SearchJsonpService } from './search-jsonp.service';

describe('SearchJsonpService', () => {
  let service: SearchJsonpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchJsonpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
