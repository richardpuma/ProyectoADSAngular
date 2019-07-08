import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-consulta-movimiento',
  templateUrl: './consulta-movimiento.component.html',
  styleUrls: ['./consulta-movimiento.component.css']
})
export class ConsultaMovimientoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
