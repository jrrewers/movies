import {Component, EventEmitter, OnInit, Output} from '@angular/core'
import {FormBuilder, FormGroup} from '@angular/forms'
import {Router} from '@angular/router'

@Component({
  selector: 'mov-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  private searchForm: FormGroup

  @Output() searchQueryChanged: EventEmitter<string> = new EventEmitter()

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({searchQuery: []})

    this.searchForm.valueChanges
      .distinctUntilChanged()
      .debounceTime(250)
      .subscribe(data =>
        this.searchQueryChanged.emit(data['searchQuery'])
      )
  }

  ngOnInit() {
  }

}
