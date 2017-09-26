import { TestBed, inject } from '@angular/core/testing'

import { DiscoverMoviesService } from './discover-movies.service'
import {HttpModule} from '@angular/http'

describe('DiscoverMoviesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiscoverMoviesService],
      imports: [HttpModule]
    })
  })

  it('should ...', inject([DiscoverMoviesService], (service: DiscoverMoviesService) => {
    expect(service).toBeTruthy()
  }))
})
