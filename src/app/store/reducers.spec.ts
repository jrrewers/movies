import {moviesReducers} from './reducers'
import {initialState} from './models/store-model'
import {MoviesStore} from './models/MoviesStore'
import {
  HidePictureAction,
  MovieDBAPIConfigurationArrivedAction,
  MovieSelectedAction,
  MoviesListArrivedAction,
  SearchMoviesAction,
  ShowPictureAction
} from './actions'
import {Movie} from './models/Movie'

describe('ngrx reducers', () => {
  let state: MoviesStore

  beforeEach(() => {
    state = initialState
  })

  it('should assign movie db config', () => {
    const mockDbConfig = {
        images: {
          base_url: 'http://image.tmdb.org/t/p/',
          secure_base_url: 'https://image.tmdb.org/t/p/',
          backdrop_sizes: [
            'w300',
            'w780',
            'w1280',
            'original'
          ],
          logo_sizes: [
            'w45',
            'w92',
            'w154',
            'w185',
            'w300',
            'w500',
            'original'
          ],
          poster_sizes: [
            'w92',
            'w154',
            'w185',
            'w342',
            'w500',
            'w780',
            'original'
          ],
          profile_sizes: [
            'w45',
            'w185',
            'h632',
            'original'
          ],
          still_sizes: [
            'w92',
            'w185',
            'w300',
            'original'
          ]
        },
        change_keys: [
          'adult',
          'air_date',
          'also_known_as',
          'alternative_titles',
          'biography',
          'birthday',
          'budget',
          'cast',
          'certifications',
          'character_names',
          'created_by',
          'crew',
          'deathday',
          'episode',
          'episode_number',
          'episode_run_time',
          'freebase_id',
          'freebase_mid',
          'general',
          'genres',
          'guest_stars',
          'homepage',
          'images',
          'imdb_id',
          'languages',
          'name',
          'network',
          'origin_country',
          'original_name',
          'original_title',
          'overview',
          'parts',
          'place_of_birth',
          'plot_keywords',
          'production_code',
          'production_companies',
          'production_countries',
          'releases',
          'revenue',
          'runtime',
          'season',
          'season_number',
          'season_regular',
          'spoken_languages',
          'status',
          'tagline',
          'title',
          'translations',
          'tvdb_id',
          'tvrage_id',
          'type',
          'video',
          'videos'
        ]
      },
      action = new MovieDBAPIConfigurationArrivedAction(mockDbConfig),
      baseUrlMock = mockDbConfig.images.secure_base_url,
      posterSizesMock = mockDbConfig.images.poster_sizes,
      newState = moviesReducers(state, action)

      expect(newState.PosterUrl).toEqual(`${baseUrlMock}${posterSizesMock[posterSizesMock.length - 2]}`)
  })

  it('should assign search query', () => {
    const searchQuery = '1wd22  2Sq',
      action = new SearchMoviesAction(searchQuery),
      newState = moviesReducers(state, action)

    expect(newState.SearchQuery).toEqual(searchQuery)
  })

  it('should assign movies list', () => {
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
      action = new MoviesListArrivedAction(moviesListMock),
      newState = moviesReducers(state, action)

    expect(newState.MoviesList).toEqual(moviesListMock)
  })

  it('should assign movie selection', () => {
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
      action = new MovieSelectedAction(movieMock),
      newState = moviesReducers(state, action)

    expect(newState.SelectedMovie).toEqual(movieMock)
  })

  it('should assign hiding picture', () => {
    const action = new HidePictureAction(),
      newState = moviesReducers(state, action)

    expect(newState.isPictureLoading).toEqual(true)
  })

  it('should assign showing picture', () => {
    const action = new ShowPictureAction(),
      newState = moviesReducers(state, action)

    expect(newState.isPictureLoading).toEqual(false)
  })
})
