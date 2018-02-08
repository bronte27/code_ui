import { TestBed, inject } from '@angular/core/testing';

import { Auth.Service } from '../services/auth.service';

describe('Auth.Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Auth.Service]
    });
  });

  it('should be created', inject([Auth.Service], (service: Auth.Service) => {
    expect(service).toBeTruthy();
  }));
});
