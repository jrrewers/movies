import {async, ComponentFixture, TestBed} from '@angular/core/testing'
import {HomeComponent} from './home.component'
import {MockComponent} from 'ng2-mock-component'
import {Store, StoreModule} from '@ngrx/store'
import {AppState} from '../store/models/store-model'
import {moviesReducers} from '../store/reducers'
import {MoviesListArrivedAction, SearchMoviesAction} from '../store/actions'
import {Movie} from '../store/models/Movie'
import 'rxjs/add/operator/skip'

describe('HomeComponent', () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>
  let store: Store<AppState>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({movies: moviesReducers})],
      declarations: [
        HomeComponent,
        MockComponent({selector: 'mov-search'}),
        MockComponent({selector: 'mov-movies-list', inputs: ['moviesList']}),
        MockComponent({selector: 'mov-movie-details', inputs: ['selectedMovie', 'posterUrl', 'isPictureLoading']})
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    store = TestBed.get(Store)
    spyOn(store, 'dispatch').and.callThrough()
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should assign movies list from store', async() => {
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
      ],
      action = new MoviesListArrivedAction(moviesListMock)

    fixture.detectChanges()
    component.moviesList$.skip(1).subscribe(moviesList => {
      expect(moviesList).toEqual(moviesListMock)
    })
  })

  it('should dispatch action for search', async() => {
    const searchQuery = '2ew 2ED'
    component.handleSearchQueryChange(searchQuery)
    expect(store.dispatch).toHaveBeenCalledWith(new SearchMoviesAction(searchQuery))
  })

})
