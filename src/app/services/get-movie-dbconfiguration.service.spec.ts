import { TestBed, inject } from '@angular/core/testing'

import { GetMovieDBConfigurationService } from './get-movie-dbconfiguration.service'
import {HttpModule} from '@angular/http'

describe('GetMovieDBConfigurationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetMovieDBConfigurationService],
      imports: [HttpModule]
    })
  })

  it('should ...', inject([GetMovieDBConfigurationService], (service: GetMovieDBConfigurationService) => {
    expect(service).toBeTruthy()
  }))
})
