export interface Movie {
  vote_count: number
  id: number
  video: boolean
  vote_average: number
  title: string
  popularity: number
  poster_path: string
  original_language: string
  original_title: string
  genre_ids: number[]
  backdrop_path: string
  adult: boolean
  overview: string
  release_date: Date
}

export interface MoviesStore {
    MoviesList: Movie[]
    SearchQuery: string
    SelectedMovie: Movie
}

export const initialState: MoviesStore = {
    MoviesList: [],
    SearchQuery: '',
    SelectedMovie: undefined
}

export interface AppState {
  movies: MoviesStore
}
