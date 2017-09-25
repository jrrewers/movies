import {AppState} from './models/store-model'

export const selectMoviesList = (state: AppState) => state.movies.MoviesList
export const selectSearchQuery = (state: AppState) => state.movies.SearchQuery
export const selectSelectedMovie = (state: AppState) => state.movies.SelectedMovie
export const selectPosterUrl = (state: AppState) => state.movies.PosterUrl
export const selectIsPictureLoading = (state: AppState) => state.movies.isPictureLoading
