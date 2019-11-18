import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAdM1P8cetDqa793wttqOamXXLYYlqIA3F1YXQIyfiFlLzO3JjTjrirVyLaBa3Ue0dXBxVE30WFSRvx3rC3LKXfTyRdMo-jKzTtkzh7t_7P4ejhK2bb9xNWfg6PzPLJIF4xL3w93SsmoQ'
    });
    return this._http.get('https://api.spotify.com/v1/browse/new-releases?country=AR', { headers })
      .pipe(map(value => value['albums'].items));
  }

  getArtista(termino: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAdM1P8cetDqa793wttqOamXXLYYlqIA3F1YXQIyfiFlLzO3JjTjrirVyLaBa3Ue0dXBxVE30WFSRvx3rC3LKXfTyRdMo-jKzTtkzh7t_7P4ejhK2bb9xNWfg6PzPLJIF4xL3w93SsmoQ'
    });
    return this._http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers })
      .pipe(map(value => value['artists'].items));
  }
}
