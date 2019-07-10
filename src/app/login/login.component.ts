//import { Globals } from './../globals/global';
import {LoginService} from './../_service/login.service';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensaje : string;
  tipoUsuario : string="1";
  

  constructor(private router:Router, private loginService:LoginService) { }

  ngOnInit() {
  }

  iniciarSesion(form: NgForm) {
    let nombre_usuario = form.value.usuario;
    let contrasena = form.value.clave;

    this.loginService.login(nombre_usuario, contrasena, this.tipoUsuario).subscribe(data => {
      if(data==null){
        this.mensaje = "Credenciales incorrectas";
      }else{
        let token = JSON.stringify(data);
        sessionStorage.setItem("access_token", token);
        sessionStorage.setItem("tipoUsuario", this.tipoUsuario);

        if (data) {
          this.router.navigate(['principal']);
        }
      }
      
    }, err => {
      this.mensaje = "Credenciales incorrectas";
    });    
  }

  cambioTipo(event){
    let evento=event;
    this.tipoUsuario=evento.target.value;
  }

}
