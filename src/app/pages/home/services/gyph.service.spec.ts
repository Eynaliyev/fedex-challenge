import { TestBed } from '@angular/core/testing';

import { GyphService } from './gyph.service';

describe('GyphService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GyphService = TestBed.get(GyphService);
    expect(service).toBeTruthy();
  });
});
