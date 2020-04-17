import { TestBed } from '@angular/core/testing';




describe('MyhttpService', () => {
  let service:  MyHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
