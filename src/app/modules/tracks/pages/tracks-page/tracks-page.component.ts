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
  
  //Creamos una lista por si tenemos mas subscripciones
  listObservers$: Array<Subscription> = [];

  constructor(private tracksServicio : TrackService) { }

  ngOnInit(): void {

    const observer1$ = this.tracksServicio.getAllTracks$()
      .subscribe( (response : TrackModel[]) =>{
        // const {data} = response;
        // console.log("Capture las canciones yo solo",response);
        this.tracksTrending = [...response];
        // this.tracksRamdom = response;
      });

    //TODO: intento de aleatorio
    // const observer2$ = this.tracksServicio.getTrackRamdom$()
    // .subscribe( (response : TrackModel[]) =>{
    //   // const {data} = response;
    //   console.log("Capture las canciones yo solo",response);
    //   this.tracksRamdom = [...response];
    // })

    const observer2$ = this.tracksServicio.getAllTracksReverse$()
    .subscribe( (response : TrackModel[]) =>{
      this.tracksRamdom = [...response];
    })

    this.listObservers$ = [observer1$ , observer2$ ];
  }

  ngOnDestroy():void {
    this.listObservers$.forEach( u => u.unsubscribe );
  }

}
