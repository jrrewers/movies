import {Action} from '@ngrx/store'
import {Movie} from './models/Movie'

export const GET_MOVIEDBAPI_CONFIGURATION = 'GET_MOVIEDBAPI_CONFIGURATION'
export const MOVIEDBAPI_CONFIGURATION_ARRIVED = 'MOVIEDBAPI_CONFIGURATION_ARRIVED'
export const GET_DEFAULT_MOVIES_LIST = 'GET_DEFAULT_MOVIES_LIST'
export const SEARCH_MOVIES = 'SEARCH_MOVIES'
export const MOVIES_LIST_ARRIVED = 'MOVIES_LIST_ARRIVED'
export const MOVIE_SELECTED = 'MOVIE_SELECTED'
export const HIDE_PICTURE = 'HIDE_PICTURE'
export const SHOW_PICTURE = 'SHOW_PICTURE'

export class GetMovieDBAPIConfigurationAction implements Action {
  readonly type = GET_MOVIEDBAPI_CONFIGURATION
}

export class MovieDBAPIConfigurationArrivedAction implements Action {
  readonly type = MOVIEDBAPI_CONFIGURATION_ARRIVED

  constructor(public payload: any) {
  }
}

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

export class MovieSelectedAction implements Action {
  readonly type = MOVIE_SELECTED

  constructor(public payload: Movie) {
  }
}

export class HidePictureAction implements Action {
  readonly type = HIDE_PICTURE
}

export class ShowPictureAction implements Action {
  readonly type = SHOW_PICTURE
}


export type MoviesActions =
  GetMovieDBAPIConfigurationAction
  | MovieDBAPIConfigurationArrivedAction
  | GetDefaultMoviesListAction
  | SearchMoviesAction
  | MoviesListArrivedAction
  | MovieSelectedAction
  | HidePictureAction
  | ShowPictureAction
