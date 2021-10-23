import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  // primero: que valor recibo, al ultimo, que tipo de valor devuelvo
  transform(value: Array<any>, args: string | null, sort: string = 'asc'): TrackModel[] {
    
    try {
      if (args === null) {
        return value;
        //si no recibo nada, directamente devuelve como esta el array
      }else{
        
        value.sort((a, b) => {
          if (a[args] > b[args]) {
            return 1;
          }   // a must be equal to b
          else if ((a[args] === b[args])){
            return 0
          }
          if (a[args] < b[args]) {
            return -1;
          }
          return 1;
        });

        return (sort == 'asc') ? value : value.reverse();
      }
    } catch (error) {
      console.log("No se pudo hacer")
      return value
    }

    // console.log('👉',value);
    // console.log('😮',args);
    // console.log('🎈',sort);
    // return value;
  };

}
