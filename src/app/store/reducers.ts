import {initialState} from './models/store-model'
import {
  GET_DEFAULT_MOVIES_LIST, HIDE_PICTURE, MOVIE_SELECTED, MOVIEDBAPI_CONFIGURATION_ARRIVED, MOVIES_LIST_ARRIVED,
  MoviesActions,
  SEARCH_MOVIES, SHOW_PICTURE
} from './actions'
import {MoviesStore} from './models/MoviesStore'

export function moviesReducers(state: MoviesStore = initialState, action: MoviesActions): MoviesStore {
  switch (action.type) {
    case GET_DEFAULT_MOVIES_LIST:
      return state
    case MOVIEDBAPI_CONFIGURATION_ARRIVED:
      return {
        ...state,
        PosterUrl: `${action.payload.images.secure_base_url}${action.payload.images.poster_sizes[action.payload.images.poster_sizes.length - 2]}`
      }
    case SEARCH_MOVIES:
      return {
        ...state,
        SearchQuery: action.payload
      }
    case MOVIES_LIST_ARRIVED:
      return {
        ...state,
        MoviesList: action.payload
      }
    case MOVIE_SELECTED:
      return {
        ...state,
        SelectedMovie: action.payload
      }
    case HIDE_PICTURE:
      return {
        ...state,
        isPictureLoading: true
      }
    case SHOW_PICTURE:
      return {
        ...state,
        isPictureLoading: false
      }
    default:
      return state
  }
}
