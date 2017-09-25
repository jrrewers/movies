import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import {StoreModule} from '@ngrx/store'
import {AppComponent} from './app.component'
import {SearchComponent} from './search/search.component'
import {MoviesListComponent} from './movies-list/movies-list.component'
import {MovieDetailsComponent} from './movie-details/movie-details.component'
import {RouterModule, Routes} from '@angular/router'
import {moviesReducers} from './store/reducers'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {DiscoverMoviesService} from './services/discover-movies.service'
import {HomeComponent} from './home/home.component'
import {EffectsModule} from '@ngrx/effects'
import {MoviesEffects} from './store/effects'
import {SearchMoviesService} from 'app/services/search-movies.service'
import {GetMovieDBConfigurationService} from './services/get-movie-dbconfiguration.service'

const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot({movies: moviesReducers}),
    EffectsModule.forRoot([MoviesEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [GetMovieDBConfigurationService, DiscoverMoviesService, SearchMoviesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
