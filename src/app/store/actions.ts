import {Action} from '@ngrx/store'
import {Movie} from './store-model'

export const GET_DEFAULT_MOVIES_LIST = 'GET_DEFAULT_MOVIES_LIST'
export const SEARCH_MOVIES = 'SEARCH_MOVIES'
export const MOVIES_LIST_ARRIVED = 'MOVIES_LIST_ARRIVED'
export const MOVIE_SELECTED = 'MOVIE_SELECTED'

export class GetDefaultMoviesListAction implements Action {
  readonly type = GET_DEFAULT_MOVIES_LIST
}

export class SearchMoviesAction implements Action {
  readonly type = SEARCH_MOVIES

  constructor(public payload: string) {
  }
}

export class MoviesListArrivedAction implements Action {
  readonly type = MOVIES_LIST_ARRIVED

  constructor(public payload: any) {
  }
}

export class MovieSelected implements Action {
  readonly type = MOVIE_SELECTED

  constructor(public payload: Movie) {
  }
}

export type MoviesActions =
  GetDefaultMoviesListAction
  | SearchMoviesAction
  | MoviesListArrivedAction
  | MovieSelected
