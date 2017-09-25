import {Movie} from './Movie'

export interface MoviesStore {
  MoviesList: Movie[]
  SearchQuery: string
  SelectedMovie: Movie
  PosterUrl: string
  isPictureLoading: boolean
}
