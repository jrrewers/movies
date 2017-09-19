import { Component, OnInit } from '@angular/core'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'mov-movies-list',
  templateUrl: './movies-list.component.html',
  styles: []
})
export class MoviesListComponent implements OnInit {
  private searchQuery: string
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>
      this.searchQuery = params.searchQuery
    )
  }

}
