import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  //maquetación
  mockCover: any ={
    cover:'https://png.pngtree.com/png-vector/20190119/ourlarge/pngtree-cartoon-cartoon-bee-bee-little-bee-png-image_474598.jpg',
    album: 'El retorno del abejorro',
    name:'La abeja(Oficial)',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
