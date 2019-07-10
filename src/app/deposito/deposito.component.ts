import { TransaccionService } from './../_service/transaccion.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {
  mensaje: string; 
  Msg:Boolean; 
  constructor(private router:Router,private transaccionService:TransaccionService) { }

  ngOnInit() {
  }
  deposito(form: NgForm) {
    let cuentaDestino = form.value.cuentaDestino;
    let monto = form.value.monto;

    this.transaccionService.realizarDeposito(cuentaDestino,monto).subscribe(data => {  

      if (data) {
        this.Msg=true;
        this.mensaje = "El Deposito Fue Exitosa";
        this.router.navigate(['deposito']);
        let cuentaDestino=form.value.cuentaDestino;
        form.controls['cuentaDestino'].setValue(""); 
        form.controls['monto'].setValue("");        
      }
    }, err => {
      this.Msg=true;
      this.mensaje = "La Deposito no se Realizo";
    });    
  }




}
