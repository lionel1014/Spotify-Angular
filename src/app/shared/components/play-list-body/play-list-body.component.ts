import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as dataRow from '../../../data/tracks.json';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {

  tracks: TrackModel[] = [];
  
  //declaro un opttionSort para las opciones de Lista
  optionSort : {
    property : string | null,
    order : string,
  } = {
    property : null,
    order : 'desc',
  };

  constructor() { }

  ngOnInit(): void {

    const {data}: any = (dataRow as any).default;
    // console.log(data);
    this.tracks = data;

  }

  changeSort( prop :string ):void{
    
    const {order} = this.optionSort;
    this.optionSort = {
      property : prop,
      order : order === 'asc' ? 'desc' : 'asc',
    }

  }

}
