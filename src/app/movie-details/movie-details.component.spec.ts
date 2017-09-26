import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {MovieDetailsComponent} from './movie-details.component'
import {Movie} from '../store/models/Movie'
import {By} from '@angular/platform-browser'
import {ChangeDetectionStrategy, DebugElement} from '@angular/core'

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent
  let fixture: ComponentFixture<MovieDetailsComponent>
  let titleEl: DebugElement
  let imgEl: DebugElement
  let descEl: DebugElement

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDetailsComponent]
    })
      .overrideComponent(MovieDetailsComponent, {
        set: {changeDetection: ChangeDetectionStrategy.Default}
      })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()

    titleEl = fixture.debugElement.query(By.css('h2'))
    imgEl = fixture.debugElement.query(By.css('img'))
    descEl = fixture.debugElement.query(By.css('p'))
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should properly display inputs', () => {
    const movieMock: Movie = {
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
      posterUrl = 'http://url/',
      isPictureLoading = false

    component.selectedMovie = movieMock
    component.posterUrl = posterUrl
    component.isPictureLoading = isPictureLoading
    fixture.detectChanges()

    expect(titleEl.nativeElement.textContent).toContain(movieMock.title)
    expect(descEl.nativeElement.textContent).toContain(movieMock.overview)
    expect(imgEl.nativeElement.getAttribute('src')).toContain(`${posterUrl}${movieMock.poster_path}`)

  })
})
