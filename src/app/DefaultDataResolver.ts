import {Injectable} from '@angular/core'
import {Resolve} from '@angular/router'
import {Movie, MoviesStore} from './store/store-model'
import {Store} from '@ngrx/store'
import {GetDefaultMoviesListAction} from './store/actions'

@Injectable()
export class DefaultDataResolver implements Resolve<any> {
  constructor(private store: Store<MoviesStore>) {}

  resolve() {
    this.store.dispatch(new GetDefaultMoviesListAction())
    return this.store.select(store => store.MoviesList)
      .skip(1)
      .first()
  }
}
