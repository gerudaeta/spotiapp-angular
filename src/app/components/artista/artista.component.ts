import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor(private router: ActivatedRoute,
              private spotifyService: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe(params => {
      let id = params['id'];
      this.getArtista(id);
      this.getTopTracks(id);
    });
  }

  ngOnInit() {
  }

  getArtista(id: string) {
    this.loading = true;
    this.spotifyService.getArtista(id).subscribe(value => {
      this.artista = value;
      this.loading = false;
    });
  }

  getTopTracks(id: string) {
    this.spotifyService.getTopTracks(id).subscribe(value => {
      this.topTracks = value;
      console.log(value);
    });
  }

}
