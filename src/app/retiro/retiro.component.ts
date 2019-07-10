import { TransaccionService } from './../_service/transaccion.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-retiro',
  templateUrl: './retiro.component.html',
  styleUrls: ['./retiro.component.css']
})
export class RetiroComponent implements OnInit {
  mensaje: string; 
  Msg:Boolean;
  constructor(private router: Router,private transaccionService:TransaccionService) { }

  ngOnInit() {
  }
  
  retiro(form: NgForm) {
    let cuentaOrigen = form.value.cuentaOrigen;
    let monto = form.value.monto;

    this.transaccionService.realizarRetiro(cuentaOrigen,monto).subscribe(data => {  

      if (data) {
        this.Msg=true;
        this.mensaje = "El Retiro Fue Exitosa";
        this.router.navigate(['retiro']);
        let cuentaDestino=form.value.cuentaDestino;
        form.controls['cuentaOrigen'].setValue(""); 
        form.controls['monto'].setValue("");        
      }
    }, err => {
      this.Msg=true;
      this.mensaje = "La Retiro no se Realizo";
    });    
  }
}
