import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({});

  errorSession : Boolean = false;

  constructor(private _asAuthServicio:AuthService, private cookie: CookieService,
    private router:Router) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        emailcontrol: new FormControl('',[
          Validators.required,
          Validators.email,
        ]),
        password: new FormControl('',[
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(12),
          Validators.pattern("^[0-9]*$"), //TODO:caracteres entre el 0 y 9
        ]),
      }
    );
  }

  enviarLogin():void{
    const { emailcontrol , password } = this.formLogin.value;
    this._asAuthServicio.sendCredentials( emailcontrol , password )
      .subscribe(response => { //cuando el usuario ingresa credenciales correctas✔✔✔
        //TODO: 200 >= x < 400

        const {tokenSession} = response;
        this.errorSession = false;
        console.log("Sesión iniciada correcta",response);

        this.cookie.set("token",tokenSession,3,"/"); //el nombre del token, el token, la duracion y direccion a funcionar(/raiz)

        this.router.navigate(['/']); //navega hacia la raiz

      }, err =>{
        //TODO: 400 >= x
        this.errorSession = true;
        console.log("Sesión iniciada incorrecta",err.error);
      })
    // console.log('🐄🐮🐄',dataLogin);
  }

}
