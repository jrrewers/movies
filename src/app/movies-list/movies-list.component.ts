import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core'
import {Movie} from '../store/models/Movie'

@Component({
  selector: 'mov-movies-list',
  template: `
    <div *ngFor="let movie of moviesList"
         [ngClass]="{'selected': movie === currentlySelectedMovie}"
         (click)="selectMovie(movie)">
      <p>{{movie.title}}</p>
    </div>`,
  styles: [`
    :host {
      padding: 10px;
    }
    
    div {
      padding: 5px 0;
      border: 1px solid #000;
      text-align: center;
      margin-bottom: 3px;
      border-radius: 20px;
    }

    .selected {
      background: #393939;
      color: #fff;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesListComponent {
  @Input() moviesList: Movie[]
  @Output() selectedMovie: EventEmitter<Movie> = new EventEmitter()
  public currentlySelectedMovie: Movie

  selectMovie(movie: Movie) {
    this.currentlySelectedMovie = movie
    this.selectedMovie.emit(movie)
  }

  constructor() {
  }

}
