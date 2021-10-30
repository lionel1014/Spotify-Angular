import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';
// import * as dataRaw from '../../../../data/tracks.json';
//dataRaw es data cruda

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit , OnDestroy {

  // mockTracksList :Array<TrackModel>= [
  // ];

  tracksTrending : Array<TrackModel> = [];
  tracksRamdom : Array<TrackModel> = [];

  constructor(private tracksServicio : TrackService) { }

  //Creamos una lista por si tenemos mas subscripciones
  listObservers$: Array<Subscription> = [];

  ngOnInit(): void {

    const observer1$ = this.tracksServicio.dataTracksTrending$
      .subscribe( response =>{
        // console.log("Capture las canciones",response);
        this.tracksTrending = [...response];
        this.tracksRamdom = [...response];
      })
    const observer2$ = this.tracksServicio.dataTracksRamdom$
      .subscribe( response =>{
        console.log("Capture las canciones del ramdom 👓🕶👓",response);
        // this.tracksTrending = [...response];
        this.tracksRamdom = [ ...this.tracksRamdom ,...response];

      })

    this.listObservers$ = [observer1$,observer2$];


    // const {data}: any = (dataRaw as any).default;
    // this.mockTracksList = data; FIXME:esto es un array estático
    // console.log(data);
  }

  ngOnDestroy():void {
    this.listObservers$.forEach( u => u.unsubscribe);
    // console.log("Componente destruido 🎇🎆🥊");
  }

}
