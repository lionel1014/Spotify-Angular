import { OrderListPipe } from './order-list.pipe';
import * as mockRaw from '../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.model';

describe('OrderListPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderListPipe();
    expect(pipe).toBeTruthy();
  });

  it('El array de entrada tiene que ser el mismo de salida',()=>{
    
    //Arrage arrancar
    const pipe = new OrderListPipe();
    const {data} : any = (mockRaw as any).default

    //Act (accion)
    const result : TrackModel[] = pipe.transform(data,'');

    //Assert (afirmar)
    expect(result).toBe(data);

  })

  it('El array tiene que estar en orden ASC',()=>{

    //Arrage (arrancar)
    const pipe = new OrderListPipe();
    const {data} : any = (mockRaw as any).default;
    const firstValue = data.find(( i:any ) => i._id === 7); //50cent
    const lastValue = data.find(( i:any ) => i._id === 6); // TNT

    //Act (accion)
    const result : TrackModel[] = pipe.transform(data,'name','asc');
    const firstResult = result[0];
    const lasttResult = result[result.length - 1];
    
    //Assert (afirmar)
    expect(firstResult).toEqual(firstValue);
    expect(lasttResult).toEqual(lastValue);

  })

});
