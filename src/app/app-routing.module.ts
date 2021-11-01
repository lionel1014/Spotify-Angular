import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';


const routes: Routes = [
  //FIXME: curioso! el orden importa!
  {
    path:'auth', //TODO: localhost:4200/auth
    loadChildren: () => import('./modules/auth/auth.module').then( m => m.AuthModule),
  },
  {
    path:'', //TODO: localhost:4200/
    component: HomePageComponent, //llamamos al componente HomePage
    loadChildren: () => import('./modules/home/home.module').then( m => m.HomeModule) , //TODO: es una importacion dinamica de un módulo.
    //FIXME: los módulos que importemos tienen que tener rutas. 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
