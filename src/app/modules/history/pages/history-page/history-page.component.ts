import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from '@modules/history/services/search.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {

  listResult : TrackModel[] = [];

  constructor(private searchServicio:SearchService) { }

  ngOnInit(): void {
  }

  //agarra la busqueda y la toma cuando es .length >= 3
  receiveData(search:string):void{
    
    this.searchServicio.searchTracks(search)
      .subscribe(({data})=>{
        // console.log("❤❤❤❤",response)
        this.listResult = data;
      })

    console.log("🎁->",search);

  }

}
