import {Component, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {MoviesStore} from './store/store-model'
import {MoviesListArrivedAction} from './store/actions'

@Component({
  selector: 'mov-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  private moviesList$

  constructor(private store: Store<MoviesStore>) {
  }


  ngOnInit() {

  }
}
