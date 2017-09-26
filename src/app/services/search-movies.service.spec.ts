import { TestBed, inject } from '@angular/core/testing'

import { SearchMoviesService } from './search-movies.service'
import {HttpModule} from '@angular/http'

describe('SearchMoviesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchMoviesService],
      imports: [HttpModule]
    })
  })

  it('should ...', inject([SearchMoviesService], (service: SearchMoviesService) => {
    expect(service).toBeTruthy()
  }))
})
