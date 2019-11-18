import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];

  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit() {
    this._spotifyService.getNewReleases().subscribe((value: any) => {
      this.nuevasCanciones = value;
    });
  }



}
