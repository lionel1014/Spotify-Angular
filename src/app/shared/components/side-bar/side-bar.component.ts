import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  mainMenu: {
    defaultOptions: Array<any> , 
    accessLink: Array<any>
  } = { defaultOptions: [], accessLink: [] }

  customOptions: Array<any> = []

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil-house-user',
        router: ['/']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history']//TODO: http://localhost:4200/history
        //FIXME: por lo que... router:['/','auth','pepe'] --> es http://localhost:4200/auth/pepe 
      },
      {
        name: 'Favoritos',
        icon: 'uil-file-heart',
        router: ['/', 'favorites'],
        query: { hola: 'mundo como estas' },
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-headphones',
        router: ['/', 'tracks'],
      },
      {
        name: 'Nick',
        icon: 'uil uil-user-exclamation',
        router: ['/', 'auth'],
      }
      
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical'
      }
    ]

    this.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/']
      },
      {
        name: 'Mi lista º2',
        router: ['/']
      },
      {
        name: 'Mi lista º3',
        router: ['/']
      },
      {
        name: 'Mi lista º4',
        router: ['/']
      }
    ]
  }

  goTo($event:any): void{

    this.router.navigate(['/', 'favorites'],{
      queryParams:{
        key1:'valor1',
        key2:'valor2',
        key3:'valor3',
      }
    });
    // console.log($event);
  }

}

//TODO: URL con parámetros --> http://localhost/parametro1/parametro2
//FIXME: URL con query params (parametros de consulta):
//http://localhost/parametro1?query=valor1&query2=valor2
