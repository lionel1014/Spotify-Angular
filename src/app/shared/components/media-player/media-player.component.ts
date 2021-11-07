import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'; //FIXME: Programacion reactiva.

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit , OnDestroy{

  //maquetación
  /* mockCover !: TrackModel  ={
    cover:'https://png.pngtree.com/png-vector/20190119/ourlarge/pngtree-cartoon-cartoon-bee-bee-little-bee-png-image_474598.jpg',
    album: 'El retorno del abejorro',
    name:'La abeja(Oficial)',
    url: 'http://localhost/algo.mp3',
    _id: 1,
  }; */

  //Creamos una lista por si tenemos mas subscripciones
  listObserver$: Array<Subscription> = [];

  state : string = 'paused'

  constructor(public multimediaServicio:MultimediaService) { }

  ngOnInit(): void {

    const obserser1$ = this.multimediaServicio.playerStatus$
      .subscribe(
        (status) => {
          this.state = status;
        })
    
    this.listObserver$ = [obserser1$];
    // this.multimediaServicio.trackInfo$.subscribe(
    //   (response) =>{ 
    //     console.log("MediaPlayer tracks->",response);
    //     this.mockCover = response;
    //   },
    //   (error) => { console.log("MediaPlayer error ->",error) }
    // )

    //TODO: recibimos los datos del servicio, propocionados por CardPlayer
    // const observer1:Subscription = this.multimediaServicio.callback.subscribe((response: TrackModel)=>{
    //   console.log("Recibi los datos de CardPlayer",response);
    //   this.mockCover = {
    //     ...response
    //   }
    // })

    // this.listObserver$ = [observer1];
  }

  ngOnDestroy():void {
    this.listObserver$.forEach( u => u.unsubscribe);
    // console.log("Componente destruido 🎇🎆🥊");
  }

}
