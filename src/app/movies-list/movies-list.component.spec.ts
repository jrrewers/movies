import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {MoviesListComponent} from './movies-list.component'
import {ChangeDetectionStrategy} from '@angular/core'
import {Movie} from '../store/models/Movie'
import {By} from '@angular/platform-browser'

describe('MoviesListComponent', () => {
  let component: MoviesListComponent
  let fixture: ComponentFixture<MoviesListComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesListComponent]
    })
      .overrideComponent(MoviesListComponent, {
        set: {changeDetection: ChangeDetectionStrategy.Default}
      })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should properly display input movie list', () => {
    const moviesListMock: Movie[] = [
      {
        title: 'Mock Movie',
        overview: 'Overview of Mock Movie',
        poster_path: 'poster_path',
        vote_count: 2,
        id: 12,
        video: false,
        vote_average: 3,
        popularity: 4,
        original_language: 'en',
        original_title: 'Mock Movie',
        genre_ids: [12, 7],
        backdrop_path: 'backdrop_path_value',
        adult: false,
        release_date: new Date(2000, 10, 10)
      },
      {
        title: 'Mock Movie 2',
        overview: 'Overview of Mock Movie',
        poster_path: 'poster_path',
        vote_count: 2,
        id: 12,
        video: false,
        vote_average: 3,
        popularity: 4,
        original_language: 'en',
        original_title: 'Mock Movie',
        genre_ids: [12, 7],
        backdrop_path: 'backdrop_path_value',
        adult: false,
        release_date: new Date(2000, 10, 10)
      }
    ]
    let secondDisplayedTitleNode

    component.moviesList = moviesListMock
    fixture.detectChanges()
    secondDisplayedTitleNode = fixture.debugElement.query(By.css('div:nth-of-type(2)'))
    expect(secondDisplayedTitleNode.nativeElement.innerText).toContain(moviesListMock[1].title)

  })
})
