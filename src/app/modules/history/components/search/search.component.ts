import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() callbackData : EventEmitter<any> = new EventEmitter();

  src : string = '';

  constructor() { }

  ngOnInit(): void {
  }

  searching(search:string):any {

    if (search.length >= 3) {
      
      this.callbackData.emit(search);
      console.log("==>",search);
    }
    //TODO: tambien podemos usar el src declarado this.src

  }

}
