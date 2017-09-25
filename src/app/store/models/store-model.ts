import {MoviesStore} from './MoviesStore'

export const initialState: MoviesStore = {
  MoviesList: [],
  SearchQuery: '',
  SelectedMovie: undefined,
  PosterUrl: '',
  isPictureLoading: false
}

export interface AppState {
  movies: MoviesStore
}
