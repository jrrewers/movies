import {Injectable} from '@angular/core'
import {Resolve} from '@angular/router'
import {Store} from '@ngrx/store'
import {GetDefaultMoviesListAction, GetMovieDBAPIConfigurationAction} from './store/actions'
import {MoviesStore} from './store/models/MoviesStore'

@Injectable()
export class DefaultDataResolver implements Resolve<any> {
  constructor(private store: Store<MoviesStore>) {}

  resolve() {
    this.store.dispatch(new GetMovieDBAPIConfigurationAction())
    this.store.dispatch(new GetDefaultMoviesListAction())
    return this.store.select(store => store.MoviesList)
      .skip(1)
      .first()
  }
}
