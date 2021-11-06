import { Component, OnInit } from '@angular/core';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {

  listResult$ : Observable<any> = of([]);
  constructor(private searchServicio:SearchService) { }

  ngOnInit(): void {
  }

  //agarra la busqueda y la toma cuando es .length >= 3
  receiveData(search:string):void{
    
    //listResult es un async, asi que automaticamente se subs, y desubs.
    this.listResult$ = this.searchServicio.searchTracks(search); 
      // .subscribe(({data})=>{
      //   // console.log("❤❤❤❤",response)
      //   this.listResult$ = data;
      // })

    console.log("🎁->",search);

  }

}
