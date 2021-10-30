import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  dataTracksTrending$ : Observable <TrackModel[]> = of([]);
  dataTracksRamdom$ : Observable <TrackModel[]> = of([]);

  constructor() { 
    const {data}: any = (dataRaw as any).default; // traigo los datos tacks.json
    this.dataTracksTrending$ = of(data); //los guardo en of

    this.dataTracksRamdom$ = new Observable(observador =>{

      const trackExample : TrackModel[] = [{   // [ {} ]
        _id: 100,
        name: "pepe",
        album: "el pepe",
        url: "http://",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfwQBWcwekLckOVmoERLTqX0kmVdlPn7isgg&usqp=CAU"
      }]

      setTimeout(()=>{
        
        observador.next(trackExample);

      },3500)
    })
  }
}
