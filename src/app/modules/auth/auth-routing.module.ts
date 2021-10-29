import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  {
    path: 'login',
    component : LoginPageComponent //TODO: http://localhost:4200/auth/login
  },
  {//FIXME: en caso de poner cualquier direccion en el URL luego del ...4200/auth/********
    path : '**',
    redirectTo : '/auth/login',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
