import {Injectable} from '@angular/core'
import {DiscoverMoviesService} from '../services/discover-movies.service'
import {Actions, Effect} from '@ngrx/effects'
import {Observable} from 'rxjs'
import {
  GET_DEFAULT_MOVIES_LIST, GET_MOVIEDBAPI_CONFIGURATION, MOVIEDBAPI_CONFIGURATION_ARRIVED,
  MovieDBAPIConfigurationArrivedAction,
  MoviesListArrivedAction,
  SEARCH_MOVIES
} from './actions'
import {Action, Store} from '@ngrx/store'
import {ROUTER_NAVIGATION} from '@ngrx/router-store'
import {SearchMoviesService} from '../services/search-movies.service'
import {AppState} from './models/store-model'
import {selectSearchQuery} from 'app/store/selectors'
import {GetMovieDBConfigurationService} from '../services/get-movie-dbconfiguration.service'

@Injectable()
export class MoviesEffects {
  @Effect()
  getMovieDBAPIConfiguration: Observable<Action> = this.actions$.ofType(GET_MOVIEDBAPI_CONFIGURATION)
    .mergeMap(() => {
    return this.getMovieDBConfigurationService.getAPIConfiguration()
      .map(config => new MovieDBAPIConfigurationArrivedAction(config))
    })

  @Effect()
  gefDefaultData: Observable<Action> = this.actions$.ofType(GET_DEFAULT_MOVIES_LIST)
    .mergeMap(() => {
      return this.discoverMoviesService.getInitialData()
        .map(initialMovies => new MoviesListArrivedAction(initialMovies))
    })

  @Effect()
  searchMovies: Observable<Action> = this.actions$.ofType(SEARCH_MOVIES)
    .withLatestFrom(this.store.select(selectSearchQuery))
    .mergeMap((data) => {
      return this.searchMoviesService.searchMovies(data[1])
        .map(foundMovies => new MoviesListArrivedAction(foundMovies))
    })

  constructor(private actions$: Actions,
              private store: Store<AppState>,
              private discoverMoviesService: DiscoverMoviesService,
              private searchMoviesService: SearchMoviesService,
              private getMovieDBConfigurationService: GetMovieDBConfigurationService) {
  }
}
