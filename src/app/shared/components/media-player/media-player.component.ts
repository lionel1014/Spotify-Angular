import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  //maquetación
  mockCover: TrackModel ={
    cover:'https://png.pngtree.com/png-vector/20190119/ourlarge/pngtree-cartoon-cartoon-bee-bee-little-bee-png-image_474598.jpg',
    album: 'El retorno del abejorro',
    name:'La abeja(Oficial)',
    url: 'http://localhost/algo.mp3',
    _id: 1,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
