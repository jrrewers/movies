import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {HomeComponent} from './home.component'
import {MockComponent} from 'ng2-mock-component'

describe('HomeComponent', () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        MockComponent({selector: 'mov-search'}),
        MockComponent({selector: 'mov-movies-list', inputs: ['moviesList']}),
        MockComponent({selector: 'mov-movie-details', inputs: ['selectedMovie', 'posterUrl', 'isPictureLoading']})
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
