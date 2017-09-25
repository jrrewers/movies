import { TestBed, inject } from '@angular/core/testing';

import { GetMovieDBConfigurationService } from './get-movie-dbconfiguration.service';

describe('GetMovieDBConfigurationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetMovieDBConfigurationService]
    });
  });

  it('should ...', inject([GetMovieDBConfigurationService], (service: GetMovieDBConfigurationService) => {
    expect(service).toBeTruthy();
  }));
});
