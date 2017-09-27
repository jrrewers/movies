import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core'
import {AppState} from '../store/models/store-model'
import {Store} from '@ngrx/store'
import {Observable} from 'rxjs/Observable'
import {selectIsPictureLoading, selectMoviesList, selectPosterUrl, selectSelectedMovie} from '../store/selectors'
import {
  GetDefaultMoviesListAction,
  GetMovieDBAPIConfigurationAction,
  HidePictureAction,
  MovieSelectedAction,
  SearchMoviesAction,
  ShowPictureAction
} from '../store/actions'
import {Movie} from '../store/models/Movie'

@Component({
  selector: 'mov-home',
  template: `
    <mov-search (searchQueryChanged)="handleSearchQueryChange($event)"></mov-search>
    <div class="row">
      <mov-movies-list [moviesList]="(moviesList$ | async)"
                       (selectedMovie)="handleMovieSelection($event)"
      ></mov-movies-list>
      <mov-movie-details [selectedMovie]="(selectedMovie$ | async)"
                         [posterUrl]="(posterUrl$ | async)"
                         [isPictureLoading]="(isPictureLoading$ | async)"
                         (imageLoaded)="handleImageLoad()"></mov-movie-details>
    </div>
  `,
  styles: [`
    mov-search {
      width: 100%;
    }

    .row {
      width: 100%;
    }

    mov-movies-list, mov-movie-details {
      width: 48%;
      display: inline-block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  public moviesList$: Observable<Movie[]>
  public selectedMovie$: Observable<Movie>
  public posterUrl$: Observable<string>
  public isPictureLoading$: Observable<boolean>

  constructor(public store: Store<AppState>) {
    this.moviesList$ = this.store.select(selectMoviesList)
    this.selectedMovie$ = this.store.select(selectSelectedMovie)
    this.posterUrl$ = this.store.select(selectPosterUrl)
    this.isPictureLoading$ = this.store.select(selectIsPictureLoading)
  }

  ngOnInit() {
    this.store.dispatch(new GetMovieDBAPIConfigurationAction())
    this.store.dispatch(new GetDefaultMoviesListAction())
  }

  handleSearchQueryChange($event) {
    this.store.dispatch(new SearchMoviesAction($event))
  }

  handleMovieSelection($event: Movie) {
    this.store.dispatch(new HidePictureAction())
    this.store.dispatch(new MovieSelectedAction($event))
  }

  handleImageLoad() {
    this.store.dispatch(new ShowPictureAction())
  }

}
