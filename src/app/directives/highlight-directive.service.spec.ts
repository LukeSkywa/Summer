import { TestBed } from '@angular/core/testing';

import { HighlightDirectiveService } from './highlight-directive.service';

describe('HighlightDirectiveService', () => {
  let service: HighlightDirectiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HighlightDirectiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
