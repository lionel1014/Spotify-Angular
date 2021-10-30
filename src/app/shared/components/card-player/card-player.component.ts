import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {

  @Input() mode: "small" | "big" = "small";
  @Input() track: TrackModel = { name:"", album:"", cover:"", url:"",_id:0 };
  // @Input() track!: TrackModel = { name:"", album:"", cover:"", url:"",_id:0 };
  //TODO: track! es para omitir la comprobación.

  constructor(private multimediaServicio: MultimediaService) { }

  ngOnInit(): void {
  }

  //TODO: Emite con al multimediaServicio.callback el track
  sendPlay(track: TrackModel):void{

    // console.log("Enviando canción al reproductor(MediaPlayer)",track);

    this.multimediaServicio.callback.emit(track);

  };

}
