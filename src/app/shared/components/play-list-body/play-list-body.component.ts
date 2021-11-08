import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {

  @Input() tracks: TrackModel[] = [];
  
  //declaro un opttionSort para las opciones de Lista
  optionSort : {
    property : string | null,
    order : string,
  } = {
    property : null,
    order : 'desc',
  };

  constructor(private trackServicio:TrackService) { }

  ngOnInit(): void {

    this.trackServicio.getAllTracks$()
      .subscribe(
        (response) =>{
          this.tracks = response;
        },
        (error) =>{
          console.log("Tracks error ->",error)
        }
      )
    // console.log(observer1$);
  }

  changeSort( prop :string ):void{
    
    const {order} = this.optionSort;
    this.optionSort = {
      property : prop,
      order : order === 'asc' ? 'desc' : 'asc',
    }

  }

}
