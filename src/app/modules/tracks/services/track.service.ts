import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
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
    return this.httpCliente.get(`${this.URL}/tracks`)//la URL
       .pipe( map(( {data}:any ) =>{
         return data;
       })
      )
    //return of() tambien funciona
    //TODO: preparado para hacer peticiones HTTP hacia su backend
  }

  // getTrackRamdom$(): Observable<any> { TODO: un array aleatorio
  //   return this.httpCliente.get(`${this.URL}/tracks`)//la URL
  //      .pipe( map(( {data}:any ) =>{
         
  //       const random = Math.floor(Math.random() * data.length);
  //       var arregloTrack = [data[random]]
  //       return arregloTrack;
  //      })
  //     )
  // }

  getAllTracksReverse$(): Observable<any> {
    return this.httpCliente.get(`${this.URL}/tracks`)//la URL
       .pipe( 
         map(( {data}:any ) =>{
           return data.reverse(); //TODO: lista revertida
        }),
        map(( dataRevertida:any ) =>{
         return dataRevertida.filter( (track:TrackModel) => track._id !== 2) //TODO: filter comun array
        }),
        tap(data => console.log(data)),

      )
    //   .pipe( map(( {data}:any ) =>{
    //     return data.map((tracks : any) =>{
    //       let random = Math.floor(Math.random() * data.length);
    //       return tracks[random];
    //     })
    //  })
    // )
  }

  // constructor() { FIXME: EJEMPLO DE COMO CREAR UN OBSERVABLE
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
