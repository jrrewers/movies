import {Component, Input, OnInit} from '@angular/core'
import {Movie} from '../store/store-model'
import {Observable} from 'rxjs'

@Component({
  selector: 'mov-movies-list',
  templateUrl: './movies-list.component.html',
  styles: []
})
export class MoviesListComponent implements OnInit {
  @Input() moviesList: Observable<Movie[]>

  constructor() {
  }

  ngOnInit() {
  }

}
