import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  // callback: EventEmitter<any> = new EventEmitter<any>() ;

  public trackInfo$ : BehaviorSubject<any> = new BehaviorSubject(undefined);
  
  public audio : HTMLAudioElement = new Audio(); //Hace referencia a un <audio> y el !: no hace falta inicializar

  // myObservable1$ : Observable<any> = new Observable;
  // myObservable1$ : Subject<any> = new Subject;
  // myObservable1$ : BehaviorSubject<any> = new BehaviorSubject('🕳');

  constructor() { 

    // this.audio = new Audio();

    this.trackInfo$.subscribe(
      (response) =>{
        
        if (response) { //cuando response tenga algo, no undefined
          this.setAudio(response)

        }
        
      }
    )

  }

  public setAudio(track : TrackModel):void {
    
    console.log("La canción ->",track)
    
    this.audio.src = track.url
    this.audio.play(); //resproduce la musica

  }
  // setTimeout(() => {
  //   this.myObservable1$.next('❣❣❣');
  // }, 500);
  // setTimeout(() => {
  //   this.myObservable1$.error('se rompio todo 😿😿😿');
  // }, 2000);
  

  // this.myObservable1$ = new Observable(
  //   (observer : Observer<any>) => {

  //     observer.next('💧');

  //     setTimeout(() => {
  //       observer.next('💧💧');
  //     },1000);

  //     setTimeout(() => {
  //       observer.complete();
  //     },2500);

  //     setTimeout(() => {
  //       observer.error('🌋🌋🌋');
  //     },3500);

  //   }
  // )
}
