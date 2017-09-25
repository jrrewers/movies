import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {Observable} from 'rxjs'
import {Movie} from '../store/models/Movie'

@Component({
  selector: 'mov-movies-list',
  template: `
    <div *ngFor="let movie of moviesList"
    (click)="selectMovie(movie)">
      <p>{{movie.title}}</p>
    </div>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesListComponent{
  @Input() moviesList: Observable<Movie[]>
  @Output() selectedMovie: EventEmitter<Movie> = new EventEmitter()

  selectMovie(movie: Movie) {
    this.selectedMovie.emit(movie)
  }

  constructor() {
  }

}
