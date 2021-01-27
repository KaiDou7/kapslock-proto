import { TestBed } from '@angular/core/testing';

import { PortfolioDownloadService } from './portfolio-download.service';

describe('PortfolioDownloadService', () => {
  let service: PortfolioDownloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioDownloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
