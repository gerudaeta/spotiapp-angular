import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];
  loading: boolean;

  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit() {

  }

  buscar(termino: string) {
    console.log(termino);
    this.loading = true;
    this._spotifyService.getArtistas(termino)
      .subscribe((value: any) => {
        this.artistas = value;
        this.loading = false;
      });
  }
}
