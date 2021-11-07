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
  public timeElapsed$ : BehaviorSubject<string> = new BehaviorSubject('00:00'); //el tiempo transcurrido
  public timeRemaining$ : BehaviorSubject<string> = new BehaviorSubject('-00:00'); //el tiempo restante

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

      this.listenAllEvents()

  }

  private listenAllEvents(): void {
    //TODO: addeEventListener recibe 3 argumentos
    this.audio.addEventListener('timeupdate',this.calculateTime,false)
  }

  private calculateTime=() => {

    // console.log("Eventos audio");
    const {duration,currentTime} = this.audio
    // console.table([duration,currentTime]);
    this.setTimeElapsed(currentTime);
    this.setTimeRemaining(duration,currentTime);
  }

  //TODO: calcula el tiempo restante
  private setTimeElapsed (currentTime : number) : void{

    let seconds = Math.floor(currentTime % 60) //devuelve numeros enteros
    let minutes = Math.floor((currentTime / 60) % 60)

    //TODO: muestra un 0 en la izquierda si es menor a 10
    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;

    const displayFormat = `${displayMinutes}:${displaySeconds}`;

    this.timeElapsed$.next(displayFormat);

  }

  private setTimeRemaining( duration : number , currentTime : number ): void{

    let timeLeft = duration - currentTime;
    let seconds = Math.floor(timeLeft % 60) //devuelve numeros enteros
    let minutes = Math.floor((timeLeft / 60) % 60)

    //TODO: muestra un 0 en la izquierda si es menor a 10
    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;
    const displayFormat = `-${displayMinutes}:${displaySeconds}`;
    this.timeRemaining$.next(displayFormat);
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
