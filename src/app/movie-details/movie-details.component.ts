import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core'
import {Movie} from '../store/models/Movie'

@Component({
  selector: 'mov-movie-details',
  template: `
    <div>
      <img [hidden]="isPictureLoading"
           src="{{posterUrl}}{{selectedMovie?.poster_path}}"
           alt="{{selectedMovie?.title}}"
           (load)="onImageLoad()">
      <h2>{{selectedMovie?.title}}</h2>
      <p>{{selectedMovie?.overview}}</p>
    </div>`,
  styles: [`
    :host {
      vertical-align: top;
      padding: 10px;
    }

    img {
      max-width: 30%;
      float: left;
      margin-right: 20px;
    }

    img:after {
      content: '';
      display: block;
      clear: both;
    }
    
    h2 {
      margin-top: 0;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailsComponent {
  @Input() selectedMovie: Movie
  @Input() posterUrl: string
  @Input() isPictureLoading: boolean
  @Output() imageLoaded: EventEmitter<any> = new EventEmitter()

  constructor() {
  }

  onImageLoad() {
    this.imageLoaded.emit()
  }

}
