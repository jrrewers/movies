import {Injectable} from '@angular/core'
import {Http, URLSearchParams} from '@angular/http'
import '../rxjs-imports'

@Injectable()
export class DiscoverMoviesService {
  private url = 'https://api.themoviedb.org/3/discover/movie'

  constructor(private http: Http) {
  }

  public getInitialData() {
    const params = new URLSearchParams()
    params.set('api_key', '4ff9d08260ed338797caa272d7df35dd')
    params.set('language', 'en-US')
    params.set('include_adult', 'false')
    params.set('include_video', 'false')
    return this.http.get(this.url, {search: params}).map(res => res.json().results)
  }

}
