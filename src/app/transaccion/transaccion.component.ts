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
  Msg:Boolean;
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
        this.Msg=true;
        this.mensaje = "La Transferencia Fue Exitosa";
        this.router.navigate(['transaccion']);
        let cuentaDestino=form.value.cuentaDestino;
        form.controls['cuentaOrigen'].setValue(""); 
        form.controls['cuentaDestino'].setValue(""); 
        form.controls['monto'].setValue("");        
      }
    }, err => {
      this.Msg=true;
      this.mensaje = "La Transferencia no se Realizo";
    });    
  }
}
