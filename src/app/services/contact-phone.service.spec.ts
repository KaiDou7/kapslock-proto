import { TestBed } from '@angular/core/testing';

import { ContactPhoneService } from './contact-phone.service';

describe('ContactPhoneService', () => {
  let service: ContactPhoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactPhoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
