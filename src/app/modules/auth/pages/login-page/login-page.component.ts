import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({});

  constructor() { }

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
    const dataLogin = this.formLogin.value;
    console.log('🐄🐮🐄',dataLogin);
  }

}
