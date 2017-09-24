import {AppState} from './store-model'

export const selectMoviesList = (state: AppState) => state.movies.MoviesList
export const selectSearchQuery = (state: AppState) => state.movies.SearchQuery
