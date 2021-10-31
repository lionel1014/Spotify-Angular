import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  // dataTracksTrending$ : Observable <TrackModel[]> = of([]);
  // dataTracksRamdom$ : Observable <TrackModel[]> = of([]);

  private readonly URL = environment.api; //http://localhost:3002/api/1.0

  constructor(private httpCliente : HttpClient) { 

  }

  getAllTracks$(): Observable<any> {
    return this.httpCliente.get(`${this.URL}/tracks`)
    //TODO: preparado para hacer peticiones HTTP hacia su backend
  } 

  // constructor() { 
  //   const {data}: any = (dataRaw as any).default; // traigo los datos tacks.json
  //   this.dataTracksTrending$ = of(data); //los guardo en of

  //   this.dataTracksRamdom$ = new Observable(observador =>{

  //     const trackExample : TrackModel[] = [{   // [ {} ]
  //       _id: 100,
  //       name: "pepe",
  //       album: "el pepe",
  //       url: "http://",
  //       cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfwQBWcwekLckOVmoERLTqX0kmVdlPn7isgg&usqp=CAU"
  //     }]

  //     setTimeout(()=>{
        
  //       observador.next(trackExample);

  //     },3500)
  //   })
  // }
}
