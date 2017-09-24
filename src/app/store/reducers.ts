import {initialState, MoviesStore} from './store-model'
import {GET_DEFAULT_MOVIES_LIST, MOVIE_SELECTED, MOVIES_LIST_ARRIVED, MoviesActions, SEARCH_MOVIES} from './actions'

export function moviesReducers(state: MoviesStore = initialState, action: MoviesActions): MoviesStore {
  switch (action.type) {
    case GET_DEFAULT_MOVIES_LIST:
      return state
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
    default:
      return state
  }
}
