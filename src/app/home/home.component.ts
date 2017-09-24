import { Component, OnInit } from '@angular/core';
import {AppState, Movie} from '../store/store-model'
import {Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {selectMoviesList} from '../store/selectors'
import {GetDefaultMoviesListAction, SearchMoviesAction} from '../store/actions'

@Component({
  selector: 'mov-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  public moviesList$: Observable<Movie[]>
  constructor(private store: Store<AppState>) {
    this.moviesList$ = this.store.select(selectMoviesList)
  }

  ngOnInit() {
    this.store.dispatch(new GetDefaultMoviesListAction())
  }

  handleSearchQueryChange($event) {
    this.store.dispatch(new SearchMoviesAction($event))
  }

}
