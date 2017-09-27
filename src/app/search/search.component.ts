import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core'
import {FormBuilder, FormGroup} from '@angular/forms'
import '../rxjs-imports'

@Component({
  selector: 'mov-search',
  template: `
    <div [formGroup]="searchForm">
      <input type="text" formControlName="searchQuery"
             placeholder="Search...">
    </div>
  `,
  styles: [`
    div {
      text-align: right;
    }

    input {
      padding: 10px 20px;
      border-radius: 20px;
      
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  private searchForm: FormGroup

  @Output() searchQueryChanged: EventEmitter<string> = new EventEmitter()

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({searchQuery: []})

    this.searchForm.valueChanges
      .distinctUntilChanged()
      .filter(data => data['searchQuery'] !== '')
      .debounceTime(250)
      .subscribe(data =>
        this.searchQueryChanged.emit(data['searchQuery'])
      )
  }

  ngOnInit() {
  }

}
