import { Component, OnInit } from '@angular/core'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'mov-movie-details',
  templateUrl: './movie-details.component.html',
  styles: []
})
export class MovieDetailsComponent implements OnInit {
  private detailedMovie: string
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.detailedMovie = params.detailedMovie
    })
  }

}
