import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback: EventEmitter<any> = new EventEmitter<any>() ;

  // myObservable1$ : Observable<any> = new Observable;
  // myObservable1$ : Subject<any> = new Subject;
  myObservable1$ : BehaviorSubject<any> = new BehaviorSubject('🕳');
  

  constructor() { 

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
}
