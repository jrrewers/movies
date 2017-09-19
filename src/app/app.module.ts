import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'

import {AppComponent} from './app.component'
import {SearchComponent} from './search/search.component'
import {MoviesListComponent} from './movies-list/movies-list.component'
import {MovieDetailsComponent} from './movie-details/movie-details.component'
import {RouterModule, Routes} from '@angular/router'

const ROUTES: Routes = [
  {
    path: ':searchQuery:detailedMovie',
    component: AppComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MoviesListComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
