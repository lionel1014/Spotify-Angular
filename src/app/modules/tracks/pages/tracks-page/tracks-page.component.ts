import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

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
    this.loadDataAll();
    this.loadDataReverse();
  }

  async loadDataAll(): Promise<void> { //TODO: forma simplificada de subscribirnos a los observables

    this.tracksTrending = await this.tracksServicio.getAllTracks$().toPromise()
      // .catch(err => console.log("no se pudo conectar", err));
    this.tracksRamdom = await this.tracksServicio.getAllTracksReverse$().toPromise()
      // .catch(err => console.log("Error de conexion TracksReverse", err));

  }
  // loadDataAll(): void {
    // this.tracksServicio.getAllTracks$().toPromise()
    //   .then( (tracks: TrackModel[]) =>{
    //     this.tracksTrending = tracks;
    //   })
    //   .catch( error => console.log("Error al cargar tracksServicio",error))
  // }
  loadDataReverse(): void {

  //   this.tracksServicio.getAllTracksReverse$()
  //   .subscribe( (response : TrackModel[]) =>{
  //     this.tracksRamdom = [...response];
  //   }, error => {
  //     console.log("Error al cargar tracksServicio",error);
  //   });

  }

  ngOnDestroy():void {
    // this.listObservers$.forEach( u => u.unsubscribe );
  }

}
