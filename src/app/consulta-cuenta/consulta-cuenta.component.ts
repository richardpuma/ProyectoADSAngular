import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-consulta-cuenta',
  templateUrl: './consulta-cuenta.component.html',
  styleUrls: ['./consulta-cuenta.component.css']
})
export class ConsultaCuentaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
