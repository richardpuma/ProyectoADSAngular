import { TransaccionService } from './../_service/transaccion.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.css']
})
export class TransaccionComponent implements OnInit {

  mensaje: string; 
  constructor(private router: Router,private transaccionService:TransaccionService) { }

  ngOnInit() {
  }

  transaccion(form: NgForm) {
    let cuentaOrigen = form.value.cuentaOrigen;
    let cuentaDestino = form.value.cuentaDestino;
    let monto = form.value.monto;

    this.transaccionService.realizarTransaccion(cuentaOrigen, cuentaDestino,monto).subscribe(data => {  

      if (data) {
        this.router.navigate(['principal']);
      }
    }, err => {
      this.mensaje = "Operacion incorrecta";
    });    
  }

}
