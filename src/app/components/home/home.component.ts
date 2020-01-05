import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];

  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit() {
    this.loading = true;
    this.error = false;
    this._spotifyService.getNewReleases().subscribe((value: any) => {
      this.nuevasCanciones = value;
      this.loading = false;
    },
      (errorServicio) => {
      this.error = true;
      this.mensajeError = errorServicio.error.error.message;
    });
  }



}
