import {Injectable} from '@angular/core'
import {Http, URLSearchParams} from '@angular/http'

@Injectable()
export class GetMovieDBConfigurationService {
  private url = 'https://api.themoviedb.org/3/configuration'

  constructor(private http: Http) {
  }

  public getAPIConfiguration() {
    const params = new URLSearchParams()
    params.set('api_key', '4ff9d08260ed338797caa272d7df35dd')
    return this.http.get(this.url, {search: params}).map(res => res.json())
  }

}

